const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    //    res.send('Hello World');
    res.json({
        message: 'Hello World',
        name: 'John Doe',
        age: 67
    });
})

module.exports = router;