const express = require('express');
const { getAllNotes,
        getNoteByID,
        createNote,
        deleteNote,
        updateNote
    } = require('../controller/noteController');

const router = express.Router();

// GET NOTES
router.get('/', getAllNotes);

// GET single note
router.get('/:id', getNoteByID);

// POST create a new note
router.post('/', createNote);

// DELETE a note
router.delete('/:id', deleteNote);

//UPDATE update a note
router.patch('/:id', updateNote);

module.exports = router;