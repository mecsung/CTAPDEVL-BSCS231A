const express = require('express');
const Note = require('../models/noteModel');

const router = express.Router();
const { createNote,
    getAllNotes,
    getSingleNote,
    deleteNote,
    updateNote
} = require('../controller/noteController');

//POST Create a new note
router.post('/', createNote );

//GET notes
router.get('/', getAllNotes);

//GET a single note by ID
router.get('/:id', getSingleNote);

//Delete a note by ID
router.delete('/:id', deleteNote);

//PATCH Update a note by ID
router.patch('/:id', updateNote);


module.exports = router;