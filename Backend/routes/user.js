const express = require('express');
const { loginUser, signupUser } = require('../controllers/userController');
const router = express.Router();

//Login
router.post('/login', (req, res) => {

});

//signup
router.post('/signup', (req, res) => {

});

module.exports = router;