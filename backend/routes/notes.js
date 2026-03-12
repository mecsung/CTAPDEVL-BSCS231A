const express = require('express');
const Note = require('../models/noteModel');

const router = express.Router();

// GET NOTES
router.get('/', (req, res) => {
    res.json({message: 'Welcome to the Notes API!'});
});

// GET single note
router.get('/:id',(req, res) => {
    const { id } = req.params; 
    res.json({message: `You requested note with id: ${id}`});   
});

// POST create a new note
// router.post('/', (req, res) => {
//     res.json({message: 'Note created successfully!'});
// });
router.post('/', async (req, res) => {
    const { title, content } = req.body;
    try {
        const note = await Note.create({ title, content });
        res.status(200).json(note);
    }
    catch(error) {
        res.status(400).json({ error: error.message });
    }
    res.json({ message: 'Note created sucessfully!' });
});

// DELETE a note
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({message: `Note with id: ${id} deleted successfully!`});
});

//UPDATE update a note
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    res.json({message: `Note with id: ${id} updated successfully!`});
});

module.exports = router;