const Note = require('../models/noteModel')

const createNote = async (req, res) => {
    const { title, content } = req.body;

    try {
        const note = await Note.create({ title, content });
        return res.status(200).json(note);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const getNotes = async (req, res) => {
    try {
        const note = await Note.find({}).sort({ createdAt: -1 });
        return res.status(200).json(note);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const getNoteById = async (req, res) => {
    const { id } = req.params;

    try {
        const note = await Note.findById(id);
        if (!note) {
            return res.status(404).json({ error: 'Note not found!' });
        }
        return res.status(200).json(note);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const deleteNote = async (req, res) => {
    const { id } = req.params;

    try {
        const note = await Note.findByIdAndDelete(id);
        if (!note) {
            return res.status(404).json({ error: 'Note not found!' });
        }
        return res.status(200).json({ message: 'Note deleted successfully!' });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    try {
        const note = await Note.findByIdAndUpdate(id, { title, content }, { new: true });
        if (!note) {
            return res.status(404).json({ error: 'Note not found!' });
        }
        return res.status(200).json(note);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

module.exports = {
    createNote,
    deleteNote,
    updateNote,
    getNotes,
    getNoteById
}