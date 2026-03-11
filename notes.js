
const express = require('express');
const router = express.Router();

// GET all notes
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Notes API!' });
});

// GET a single note by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `You requested note with ID: ${id}` });
});

// CREATE a note
router.post('/', (req, res) => {
  res.json({ message: 'Note created successfully!' });
});

// UPDATE a note
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Note with ID: ${id} updated successfully!` });
});

// DELETE a note
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Note with ID: ${id} deleted successfully!` });
});

module.exports = router;