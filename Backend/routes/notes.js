const express = require('express');

const router = express.Router();
const { createNote, deleteNote, updateNote, getNotes, getNoteByID } = require('../controller/noteController');

//GET notes
router.get('/', getNotes);

//DISPLAY note by ID
router.get('/:id', getNoteByID);

//POST/CREATE
router.post('/', createNote);

//DELETE a ntoe
router.delete('/:id', deleteNote);

//UPDATE a note
router.patch('/:id', updateNote);

module.exports = router;   