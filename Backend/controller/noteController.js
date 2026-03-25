// Import ang Note model mula sa models folder

const Note = require('../models/notesModels');


// GET all notes

const getNotes = async (req, res) => {

  try {

    const notes = await Note.find({}).sort({ createdAt: -1 }); // Ipag-ayos ng pinakabago

    res.status(200).json(notes);

  } catch (err) {

    res.status(500).json({ error: err.message });

  }

};


// GET single note by ID

const getNoteById = async (req, res) => {

  const { id } = req.params;

  try {

    const note = await Note.findById(id);

    if (!note) {

      return res.status(404).json({ error: 'Note not found' });

    }

    res.status(200).json(note);

  } catch (err) {

    res.status(500).json({ error: err.message });

  }

};


// CREATE a new note

const createNote = async (req, res) => {

  try {

    const { title, content } = req.body;

    // Check kung kumpleto ang required fields

    if (!title || !content) {

      return res.status(400).json({ error: 'Title and content are required!' });

    }

    const note = await Note.create({ title, content });

    res.status(201).json(note); // 201 = Created status

  } catch (err) {

    res.status(500).json({ error: err.message });

  }

};


// UPDATE an existing note

const updateNote = async (req, res) => {

  const { id } = req.params;

  const { title, content } = req.body;

  try {

    const note = await Note.findByIdAndUpdate(

      id, 

      { title, content }, 

      { new: true, runValidators: true } // Ibalik ang bagong data at i-validate ulit

    );

    if (!note) {

      return res.status(404).json({ error: 'Note not found' });

    }

    res.status(200).json(note);

  } catch (err) {

    res.status(500).json({ error: err.message });

  }

};


// DELETE a note

const deleteNote = async (req, res) => {

  const { id } = req.params;

  try {

    const note = await Note.findByIdAndDelete(id);

    if (!note) {

      return res.status(404).json({ error: 'Note not found' });

    }

    res.status(200).json({ message: 'Note deleted successfully' });

  } catch (err) {

    res.status(500).json({ error: err.message });

  }

};


// I-export lahat ng functions para magamit sa routes

module.exports = {

  getNotes,

  getNoteById,

  createNote,

  updateNote,

  deleteNote

};
 