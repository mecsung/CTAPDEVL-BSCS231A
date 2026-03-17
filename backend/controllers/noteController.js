const Note = require('../models/noteModel.js');

// Get all notes
const getAllNote = async (req, res) => {
    try {
        const notes = await Note.find({}).sort({ createdAt: -1 });
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get specific note
const getSingleNote = async (req, res) => {
    const { id } = req.params; 
    try {
        const note = await Note.findById(id);
        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        }
        res.status(200).json(note);
    } catch (error) {
        res.status(400).json({ error: "Invalid ID format" });
    }
};

// Create a new note
const createNote = async (req, res) => {
    const { title, content } = req.body;
    try {
        const note = await Note.create({ title, content });
        res.status(201).json(note); 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a note
const deleteNote = async (req, res) => {
    const { id } = req.params;
    try {
        const note = await Note.findByIdAndDelete(id);
        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        }
        res.status(200).json({ message: "Deleted successfully", note });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a note
const updateNote = async (req, res) => {
    const { id } = req.params;
    try {
        const note = await Note.findByIdAndUpdate(id, { ...req.body }, { new: true });
        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        }
        res.status(200).json(note);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = {
    createNote,
    deleteNote,
    updateNote,
    getAllNote,
    getSingleNote
};