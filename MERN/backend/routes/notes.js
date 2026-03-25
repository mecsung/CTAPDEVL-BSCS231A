const express = require('express');
const { createNote, getAllNote, getSingleNote, deleteNote, updateNote } = require('../controllers/noteController');

const router = express.Router();

// GET notes
router.get('/', getAllNote);

// GET single note
router.get('/:id', getSingleNote);

//POST create a new note
router.post('/', createNote);

// DELETE a note
router.delete('/:id', deleteNote);

// UPDATE a note
router.patch('/:id', updateNote);

module.exports = router;