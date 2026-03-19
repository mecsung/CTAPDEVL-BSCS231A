const { default: mongoose } = require('mongoose');
const Note = require('../models/noteModels');

// GET all notes
const getNote = async (req, res) => {
    const notes = await Note.find({}).sort({ createdAt: -1 });
    res.status(200).json(notes);
};
 
// Get a single note
const getNotebyId = async (req, res) => {
    const { id } = req.params;
    const note = await Note.findById(id);
 
    if (!note) {
        return res.status(404).json({ error: 'Note not found' });
    }
    res.status(200).json(note);
};
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
    res.json({ message: "created a new note" })
};
 
// Update a note
const updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const note = await Note.findByIdAndUpdate(id, { title, content }, { new: true });
 
    if (!note) {
        return res.status(404).json({ error: 'Note not found' });
    }
    res.status(200).json(note);
};
 
// Delete a note
const deleteNote = async (req, res) => {
    const { id } = req.params;
    const note = await Note.findByIdAndDelete(id);
 
    if (!note) {
        return res.status(404).json({ error: 'Note not found' });
    }
    res.status(200).json({ message: 'Note deleted successfully!' });
};
 //get a single note
const getSingleNote = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Note not found'});
    }

    const note = await Note.findById(id);


    if (!note) {
        return res.status(404).json({ error: 'Note not found' });
    }
   res.status(200).json(note);
}

module.exports = {
    createNote,
    deleteNote,
    updateNote,
    getNote,
    getNotebyId,
    getSingleNote
};