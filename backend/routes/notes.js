const express = require('express');
const router = express.Router();

const { 
    createNote, 
    deleteNote, 
    updateNote, 
    getAllNote, 
    getSingleNote 
} = require('../controllers/noteController.js');

// 1. Get ALL notes
router.get('/', getAllNote);

// 2. Get a SINGLE note by ID
router.get('/:id', getSingleNote);

// 3. Create a new note
router.post('/', createNote);

// 4. Delete a note
router.delete('/:id', deleteNote);

// 5. Update a note
router.patch('/:id', updateNote);

module.exports = router;