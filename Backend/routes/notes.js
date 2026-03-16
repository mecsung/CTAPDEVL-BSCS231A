const express = require('express');
const Note = require('../models/noteModel')
const { createNote } = require('../controller/noteController');
const router = express.Router();

//GET notes
router.get('/', getAllNotes);

//GET ID
router.get('/:id', getNoteById);

//POST
router.post('/', createNote);

//UPDATE
router.patch('/:id', updateNote);

//DELETE
router.delete('/:id', deleteNote);


module.exports = router;   