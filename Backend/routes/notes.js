const express = require('express');
const {
  createNote,
  getSingleNote,
  getAllNote,
  UpdateNote,
  deleteNote
} = require('../controllers/noteControllers');

const router = express.Router();

// Get all notes
router.get('/', getAllNote);

// Get single note
router.get('/:id', getSingleNote);

// Create note (NO ID HERE)
router.post('/', createNote);

// Delete note
router.delete('/:id', deleteNote);

// Update note
router.patch('/:id', UpdateNote);

module.exports = router;