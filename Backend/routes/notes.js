const express = require('express');
const router = express.Router();

// Import controller functions
const {
  getAllNotes,
  getSingleNote,
  createNote,
  updateNote,
  deleteNote
} = require('../routes/notesController'); // adjust path if needed

// CRUD routes
router.get('/', getAllNotes);           // GET all notes
router.get('/:id', getSingleNote);      // GET note by ID
router.post('/', createNote);           // POST create note
router.put('/:id', updateNote);         // PUT update note
router.delete('/:id', deleteNote);      // DELETE note

module.exports = router;