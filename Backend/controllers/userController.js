const User = require('../models/userModel');

const loginUser = (req, res) => {
    res.json({
        message: 'Login successful'
    });
};

const signupUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.signup(email, password);
        res.status(200).json({ email, user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

    res.json({
        message: 'Signup successful'
    });
};

module.exports = {
    loginUser,
    signupUser
};