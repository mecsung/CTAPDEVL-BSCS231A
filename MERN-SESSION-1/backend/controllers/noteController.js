const Note = require('../models/noteModel');

// GET all notes
const getAllNote = async (req, res) => {
    try {
        const notes = await Note.find({}).sort({ createdAt: -1 });
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET single note
const getSingleNote = async (req, res) => {
    const { id } = req.params;      
    try {
        const note = await Note.findById(id);
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json(note);
    } catch (error) {
        res.status(400).json({ error: 'Invalid ID format' });
    }
};

// Create a new note
const createNote = async (req, res) => {
    const { title, content } = req.body;    
    try {
        const note = await Note.create({ title, content });

        return res.status(201).json(note);
    } catch (error) {
        return res.status(400).json({ message: 'Error creating note', error: error.message });
    }
};

// Delete a note by ID
const deleteNote = async (req, res) => {
    const { id } = req.params;  
    try {
        const note = await Note.findByIdAndDelete(id);
        if (!note) {
            return res.status(404).json({ error: 'Note not found' });
        }
        return res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
        return res.status(400).json({ error: 'Invalid ID format' });
    }
};

// Update a note by ID
const updateNote = async (req, res) => {
    const { id } = req.params;  
    const { title, content } = req.body;
    try {
        const note = await Note.findByIdAndUpdate(id, { title, content }, { new: true });
        if (!note) {
            return res.status(404).json({ error: 'Note not found' });
        }
        return res.status(200).json(note);
    } catch (error) {
        return res.status(400).json({ error: 'Invalid ID format or data' });
    }
};

module.exports = { createNote, getAllNote, getSingleNote, deleteNote, updateNote }; 