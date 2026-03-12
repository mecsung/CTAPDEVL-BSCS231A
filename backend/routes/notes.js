const express = require('express');

const Note = require('../models/noteModel')

const router = express.Router();

module.exports = router;

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the notes API!' });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `You requested note with ID: ${id}` });
});

router.post('/', async (req, res) => {
    const { title, content } = req.body;

    try {
        const note = await Note.create({ title, content });
        res.status(200).json(note);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
    res.json({ message: 'Note created successfully!' })
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Note with ID: ${id} deleted successfully!` });
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Note with ID: ${id} updated successfully!` });
});