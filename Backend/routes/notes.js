const express = require("express");
const Note = require('../models/noteModel'); // also check filename, should be singular

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Notes route working" });
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