const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

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
}, { timestamps: true });

// Static method for signing up a user
userSchema.statics.signupUser = async function({ email, password }) {
    //Validation
    if(!email || !password){
        throw Error('All fields must be filled');
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid');
    }
    if(!validator.isLength(password, { min: 8 })){
        throw Error('Password must be at least 8 characters long');
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 symbol');
    }

    // Check if user already exists
    const exists =  await this.findOne({ email });
    if(exists){
        throw Error('Email already in use');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ email, password: hash });

    return user;
};

userSchema.statics.login = async function({ email, password }) {
    //Validation
    if(!email || !password){
        throw Error('All fields must be filled');
    }
    const user = await this.findOne({ email });
    if (!user){
        throw Error('All fields must be filled');
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match){
        throw Error('Invalid username or password');
    }

    return user;
}

module.exports = mongoose.model('User', userSchema);