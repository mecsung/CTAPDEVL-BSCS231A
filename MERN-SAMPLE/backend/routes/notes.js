const express = require('express');
const { createNote, getAllNote, getSingleNote } = require('../controllers/noteController');

const router = express.Router();

// GET notes all
router.get('/', getAllNote);

// GET single note with ID; display
router.get('/:id', getSingleNote);

// POST create a new note
router.post('/', createNote);

// DELETE a note by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json(`Your requested note with ID: ${id} has been deleted.`);
});

// PATCH update a note
router.patch('/:id', (req,res) => {
    const { id } = req.params;
    res.json({
        message: `Hello World! updated with ID: ${id}`,
        name: "monsimonsi",
        age: 1
    });
});

module.exports = router;