const express = require('express');

const router = express.Router();

// Get all notes
router.get('/', (req, res) => {
  
});

module.exports = router;

//Get notes
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the notes API' });
});

// Get single note
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `You requested note with id ${id}` });
});

// POST Create a new note
router.post('/', (req, res) => {
    res.json({ message: 'Note created successfully' });
});

//Delete a note
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Note with id ${id} deleted successfully` });
});

// Update a note
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Note with id ${id} updated successfully` });
});