const express = require('express');

const {loginUser, signupUser} = require('../controllers/userController');

const router = express.Router();

// Login Endpoints
router.post('login', loginUser);

// Signup Endpoints
router.post('signup' , SignupUser);


module.exports = router;
