const express = require('express');
const Note =require('../models/noteModel');
const { createNote, getAllNote, getSingleNote  } = require('../controllers/noteController');
const router = express.Router();

// GET all notes
router.get('/',getAllNote);

router.get('/',getSingleNote);

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Notes API!' });
});

// GET a single note by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `You requested note with ID: ${id}` });
});

// CREATE a note
router.post('/', async (req, res) => {
  const { title, content } = req.body;

  try {
    const note = await Note.create({ title, content });
    res.status(201).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  res.json({message : 'Note created successfully!'});
});

router.post('/',createNote);

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