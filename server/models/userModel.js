const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true});

userSchema.statics.signup = async function(email, password) {

    //VALIDATION
    if(!email || !password){
        throw Error('Lagyan mo lahat')
    }
    if (!validator.isEmail(email)) {
        throw Error('Bawal ung email mo')
    }
    if (!validator.isLength(password, { min: 8 })) {
        throw Error('password mo ang ikle')
    }
    if (!validator.isStrongPassword(password)){
        throw Error('boi ayusin mo password mo')
    }

    const exists = await this.findOne({email});
    if (exists) {
        throw Error ('Gamit na ung email mo boi');
    }

    const salt = await bcrypt.genSalt(8);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({email, password: hash});

    return user;

}

userSchema.statics.login = async function (email, password){
    if (!email || !password){
        throw Error('Lagyan mo lahat');
    }
    const user = await this.findOne({ email });
    if (!user){
        throw Error('Bawal ung email mo');
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match){
        throw Error('Invalid username or password').message;
    }

    return user
}

module.exports = mongoose.model('User', userSchema);