// 1. Correct Import (use CommonJS to match other files)
const Note = require('../models/noteModel.js');

// Get all notes
const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find({}).sort({ createdAt: -1 });
        // Corrected: .status(200) not .send(200)
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get specific note
const getNoteById = async (req, res) => {
    const { id } = req.params; // Using params from the URL
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
        res.status(201).json(note); // Only one response here!
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a note
const deleteNote = async (req, res) => {
    const { id } = req.params; // URL param /:id
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
        // { new: true } returns the updated document instead of the old one
        const note = await Note.findByIdAndUpdate(id, { ...req.body }, { new: true });
        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        }
        res.status(200).json(note);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// 4. Correct Export (Matching your Router names)
module.exports = {
    createNote,
    deleteNote,
    updateNote,
    getNotes: getAllNotes,
    getNotesById: getNoteById
};