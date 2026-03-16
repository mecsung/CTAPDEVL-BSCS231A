             const Note = require('../models/noteModels');

// GET all notes - sorted by createdAt
const getAllNote = async (req, res) => {
    try {
        const notes = await Note.find({}).sort({ createdAt: -1 });
        res.status(200).json(notes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// GET single note by ID
const getNotebyId = async (req, res) => {
    try {
        const { id } = req.params;
        const note = await Note.findById(id);
        if (!note) {
            return res.status(404).json({ error: 'No such note' });
        }
        res.status(200).json(note);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// CREATE note
const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const note = await Note.create({ title, content });
        res.status(201).json(note);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// UPDATE note
const updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    const note = await Note.findByIdAndUpdate(id, { title, content }, { new: true });

    if (!note){
        return res.status(400),json({ error: 'Note not found'});9
    }

    res.status(200).json(note);
};

// DELETE note
const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;
        const note = await Note.findByIdAndDelete(id);
        if (!note) {
            return res.status(404).json({ error: 'No such note' });
        }
        res.status(200).json({ message: `Note ${id} deleted` });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getAllNote,
    getNotebyId,
    createNote,
    updateNote,
    deleteNote
};

