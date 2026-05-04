const express = require('express');
const {loginUser, signupUser } = require('../controller/userController');

const router = express.Router();

//LOGIN
router.post('/login', loginUser);
    //for handle login logic

//SIGNUP
router.post('/signup', signupUser);
    //for signup logic

module.exports = router;