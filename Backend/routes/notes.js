const express = require('express');

const router = express.Router();

const {
    createNote,
    deleteNote,
    updateNote,
    getNotes,
    getNoteByID
} = require('../controller/noteController');

router.get('/', getNotes);
router.get('/:id', getNoteByID);
router.post('/', createNote);
router.delete('/:id', deleteNote);
router.patch('/:id', updateNote);

module.exports = router;