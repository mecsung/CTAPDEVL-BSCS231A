const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const createToken = (_id) => {
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT secret not configured');
    }

    return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: '3d' });
};

const signupUser = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'All fields must be filled' });
    }

    try {
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(400).json({ error: 'Username already in use' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await User.create({ username, password: hashedPassword });
        const token = createToken(user._id);

        return res.status(201).json({ username: user.username, token });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'All fields must be filled' });
    }

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ error: 'Incorrect username or password' });
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(400).json({ error: 'Incorrect username or password' });
        }

        const token = createToken(user._id);
        return res.status(200).json({ username: user.username, token });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = { signupUser, loginUser };
