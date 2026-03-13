const express = require("express");
const Note = require('../models/noteModel'); // also check filename, should be singular

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
      message: "Notes route working",
      name: 'John Doe',
      age: 30

   });
});

// GET all notes
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Notes API!' });
});

// GET single note by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `You requested note with ID: ${id}` });
});

// POST create a new note
router.post('/', (req, res) => {
  res.json({ message: 'Note created successfully!' });
});

// DELETE a note by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Note with ID: ${id} deleted successfully!` });
});

// UPDATE a note by ID
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Note with ID: ${id} updated successfully!` });
});

// POST create a new note
router.post('/', async (req, res) => {
  const { title, content } = req.body;

  try {
    const note = await Note.create({ title, content });
    res.status(201).json(note);  // 201 = Created
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;