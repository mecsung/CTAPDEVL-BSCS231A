const moongoose = require('mongoose');
const bycrypt = require('bcrypt');
const validator = require('validator');

const Schema = moongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        rewuired: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

userSchema.statics.signup = async function(email, password) {

    // Validation
    if (!email || !password) {
        throw Error('All fields must be filled');
    }

    if (!validator.isEmail(email)) {
        throw Error('Email is not valid');
    }

    if (!validator.isStrongPassword(password)) {
        throw Error('Password is not strong enough');
    }

    // Check if email already exists
    const exists = await this.findOne({ email });
    if (exists) {
        throw Error('Email already in use');
    }

    const salt = await bycrypt.genSalt(10);
    const hash = await bycrypt.hash(password, salt);

    // create new user
    const user = await this.create({ email, password: hash });
    return user;

}

module.exports = moongoose.model('User', userSchema);