const express = require('express');

const router = express.Router();
const { createNote, delNote, upNote, getNote, getNotebyId } = require('../controllers/noteController');

// GET notes all
router.get('/', getNote);
 
// GET single note with ID; display
router.get('/:id', getNotebyId);
 
// POST create a new note
router.post('/', createNote);
 
// DELETE a note by ID
router.delete('/:id', delNote);
 
// PATCH update a note
router.patch('/:id', upNote);
 
module.exports = router;