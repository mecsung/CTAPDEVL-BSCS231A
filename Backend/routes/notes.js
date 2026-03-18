const express = require('express');
const {
  createNote,
  getNote,
  getNotebyId,
  deleteNote,
  updateNote,
} = require('../controllers/noteController');

// GET notes all
router.get('/', getNote);
 
// GET single note with ID; display
router.get('/:id', getNotebyId);
 
// POST create a new note
router.post('/', createNote);
 
// DELETE a note by ID
router.deleteNote('/:id', deleteNote);
 
// PATCH update a note
router.patchNote('/:id', updateNote);
 
module.exports = router;