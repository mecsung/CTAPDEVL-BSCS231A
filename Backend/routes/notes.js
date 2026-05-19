const express = require('express');

const router = express.Router();
const { createNote, deleteNote, updateNote, getNotes, getNoteByID } = require('../controllers/noteController');
const requireAuth = require('../middleware/requireAuth');

router.use(requireAuth);

// GET NOTES
router.get('/', getNotes);

// GET single note
router.get('/:id', getNoteByID);

// POST create a new note
router.post('/', createNote);

// DELETE a note
router.delete('/:id', deleteNote);

//UPDATE update a note
router.patch('/:id', updateNote);

module.exports = router;