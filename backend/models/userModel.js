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
}, {timestamps: true});

// Signup static method
userSchema.statics.signup = async function(email, password) {
    const exist = await this.findOne({email});

    // Validation
    if (!email || !password) {
        throw Error('All fields must be filled!');
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid!');
    }

    if (exist) {
        throw Error('Email already in use');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // Create new user
    const user = await this.create({email, password: hash});

    return user;
}

module.exports = mongoose.model('User', userSchema);