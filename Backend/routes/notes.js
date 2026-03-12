const express = require('express');
const Note = require('../models/noteModel');


const router = express.Router();

router.post('/', async (req, res) => {
    const { title,content } = req.body;

    try {
        const note = await Note.create({ title, content });
        res.status(200).json(note);
    }

    catch (error) {
        res.status(400).json({ error: error.message });
    }
    res.json({ message: 'Note created successfully!'})
});


router.get('/', (req, res) => {
    //    res.send('Hello World');
    res.json({
        message: 'Hello World',
        name: 'John Doe',
        age: 67
    });
})

module.exports = router;