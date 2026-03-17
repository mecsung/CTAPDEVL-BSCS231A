const express = require('express');
const {createNote,
  deleteNote,
  updateNote,
  getAllNotes,
  getNoteById
} = require('../controller/noteController');

const router = express.Router();

router.get('/', getAllNotes);

router.get('/:id', getNoteById);

router.post('/', createNote); 

router.delete('/:id', deleteNote);

router.patch('/:id', updateNote);

module.exports = router;

// router.get('/', (req, res) => {
//   res.json({ message: 'Welcome to the Notes API!' });
// });

// router.get('/:id', (req, res) => {
//   const {id } = req.params;
//   res.json({ message: 'You requested note with ID: ${id}' });
// });

// router.post('/', (req, res) => {
//   res.json({ message: 'Note created successfully!' });
// });