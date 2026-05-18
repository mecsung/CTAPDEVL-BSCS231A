const express = require('express');
const { createNote, getAllNote, getSingleNote, deleteNote, updateNote } = require('../controllers/noteController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.use(requireAuth);

// GET notes all
router.get('/', getAllNote);

// GET single note with ID; display
router.get('/:id', getSingleNote);

// POST create a new note
router.post('/', createNote);

// DELETE a note by ID
router.delete('/:id', deleteNote);

// PATCH update a note
router.patch('/:id', updateNote);

module.exports = router;