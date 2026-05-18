const mongoose = require('mongoose');
const Note = require('../models/noteModel');

// Get all notes
const getAllNote = async (req, res) => {
    const userId = req.user._id;
    const notes = await Note.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(notes);
};

// Get a single note
const getSingleNote = async (req, res) => {
    const { id } = req.params;
    const userId = req.user._id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Note not found' });
    }
    
    const note = await Note.findOne({ _id: id, userId });

    if (!note) {
        return res.status(404).json({ error: 'Note not found' });
    }
    res.status(200).json(note);
}

// Create a new note
const createNote = async (req, res) => {
    const { title, content } = req.body;
    const userId = req.user._id;

    try {
        const note = await Note.create({ title, content, userId });
        return res.status(200).json(note);
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

// Delete a note
const deleteNote = async (req, res) => {
    const { id } = req.params;
    const userId = req.user._id;
    const note = await Note.findOneAndDelete({ _id: id, userId });

    if (!note) {
        return res.status(404).json({ error: 'Note not found' });
    }
    // res.status(200).json ({ message: 'Note deleted successfully!' });
    res.status(200).json (note);
}

// Update a note
const updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, content} = req.body;
    const userId = req.user._id;

    const note = await Note.findOneAndUpdate(
        { _id: id, userId },
        { title, content },
        { new: true }
    );

    if(!note) {
        return res.status(404).json({ error: 'Note not found'});
    }
    res.status(200).json(note);
};


module.exports = {
    createNote,
    getAllNote,
    getSingleNote,
    deleteNote,
    updateNote
};