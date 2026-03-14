const mongoose = require('mongoose');
const Note = require('../models/noteModel');

// Get all notes
const getAllNote = async (req, res) => {
    const notes = await Note.find({}).sort({ createdAt: -1 });
    res.status(200).json(notes);
};

// Get a single note
const getSingleNote = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Note not found' });
    }
    
    const note = await Note.findById(id);

    if (!note) {
        return res.status(404).json({ error: 'Note not found' });
    }
    res.status(200).json(note);
}

// Create a new note
const createNote = async (req, res) => {
    const { title, content } = req.body;

    try {
        const note = await Note.create({ title, content });
        return res.status(200).json(note);
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

// Delete a note

// Update a note

module.exports = {
    createNote,
    getAllNote,
    getSingleNote,
};