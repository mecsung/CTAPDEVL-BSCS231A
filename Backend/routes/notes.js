const express = require('express');
const router = express.Router();

// controller is in the same folder
const {
  getAllNotes,
  getSingleNote,
  createNote,
  updateNote,
  deleteNote
} = require('./notesController'); // <-- ./ because same folder

<<<<<<< Updated upstream
=======
// CRUD routes
router.get('/', getAllNotes);
router.get('/:id', getSingleNote);
router.post('/', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

>>>>>>> Stashed changes
module.exports = router;