const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const { use } = require('bcrypt/promises');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true});


//Signup static method
userSchema.statics.signup = async function(email, password) {
    //for validation
    if (!email || !password) {
        throw Error('All fields must be filled out.');
    }
    if (!validator.isEmail(email)){
        throw Error('Email is not valid.');
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password must contain 8 characters with atleast 1 uppercase, 1 number, and 1 special character.')
    }

    //to check if email already exists
    const exists = await this.findOne({ email });
    if (exists){
        throw Error('Email already in use.');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    //Create new user
    const user = await this.create({ email, password: hash });
    return user;
}

userSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error ('All fields must be filled.');
    }
    const user = await this.findOne({ email });
    if (!user) {
        throw Error ('Invalid username or password.');
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw Error ('Invalid username or password.');
    }
    return user
}

module.exports = mongoose.model('User', userSchema);