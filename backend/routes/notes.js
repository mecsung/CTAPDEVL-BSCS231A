const express = require('express');
const {
    createNote,
    deleteNote,
    updateNote,
    getNotes,
    getNoteById
} = require("../controllers/noteController");

const router = express.Router();

module.exports = router;

router.get('/:id', getNotes);

router.get('/:id', getNoteById);

router.post('/', createNote);

router.delete('/:id', deleteNote);

router.patch('/:id', updateNote);