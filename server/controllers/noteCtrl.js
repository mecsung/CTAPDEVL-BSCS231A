const Note = require('../models/noteModel');

// GET all notes
const getNote = async (req, res) => {
    const notes = await Note.find({}).sort({ createdAt: -1 });
    res.status(200).json(notes);
}

// Get a single note
const getNotebyId = async (req, res) => {
    const { id } = req.params;
    const notes = await Note.findById(id);

    if (!notes) {
        return res.status(404).json({ error: 'boi wala' });
    }
    res.status(200).json(notes);
}
// Create a note
const createNote = async (req, res) => {

    const { title, content } = req.body;

    try {
        const note = await Note.create({ title, content });
        res.status(200).json(note);
    }
    catch (error) {
        res.json({ error: error.message });
    }
    res.json({ message: "May note ka na" })
};


// Update a note
const upNote = async (req, res) => {
    const { id } = req.param;
    const { title, content } = req.body;
    const notes = await Note.findByIdAndUpdate(id, { title, content }, { new: true });

    if (!notes) {
        return res.status(404).json({ error: 'boi wala' });
    }
    res.status(200).json({ message: 'Note updated note successfully!' });
}

// Delete a note
const delNote = async (req, res) => {
    const { id } = req.param;
    const notes = await Note.findByIdAndDelete(id);

    if (!notes) {
        return res.status(404).json({ error: 'boi wala' });
    }
    res.status(200).json({ message: 'Note deleted successfully!' });
}


module.exports = {
    createNote,
    delNote,
    upNote,
    getNote,
    getNotebyId
}