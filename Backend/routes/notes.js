const express = require('express');

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
router.post('/', (req, res) => {
    res.json({message: 'Note created successfully!'});
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