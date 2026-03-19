const express = require('express');
const Note = require('../models/noteModel')

const router = express.Router();
const { createNote, getAllNotes, getSingleNote, deleteNote, updateNote } = require('../controller/noteController');


//Get single note
router.get('/:id', getSingleNote);

//Create a new note
router.post('/', createNote);

//Delete a note
router.delete('/:id', deleteNote);

//Update a note
router.patch('/:id', updateNote);

router.get('/', getAllNotes);

module.exports = router;