const express = require('express');
const router = express.Router();

const { createNote, getNotes, getNoteById, deleteNote, updateNote } = require('../controllers/noteController');

router.get('/', getNotes);
router.get('/:id', getNoteById);
router.post('/', createNote);
router.delete('/:id', deleteNote);
router.patch('/:id', updateNote);

module.exports = router;