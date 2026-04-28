const Note = require('../models/noteModel');

//GET all notes FUNCTION
const getNotes = async (req, res) => {
    const notes = await Note.find({}).sort({ createdAt: -1 });
    res.status(200).json(notes);
};

//Get single note FUNCTION
const getNoteByID = async (req, res) => {
    const { id } = req.params;
    const note = await Note.findById(id);

    if(!note){
        return res.status(404).json({ error: 'Note not found' });
    }
    res.status(200).json(note);
}

//CREATE FUNCTION
const createNote = async (req, res) => {
    try {
        const note = await Note.create(req.body);
        return res.status(200).json(note);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

//DELETE FUNCTION
const deleteNote = async (req, res) => {
    const{ id } = req.params;
    const note = await Note.findByIdAndDelete(id);

    if(!note){
        return res.status(404).json({ error: 'Note not found' });
    }

    res.status(200).json({message: 'Note deleted successfully.'});
};

//UPDATE  FUNCTION
const updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    const note = await Note.findByIdAndUpdate(id, { title, content }, {new: true});

    if(!note){
        return res.status(404).json({error: 'Note not found.'});
    }

    res.status(200).json(note);
}

module.exports = {
    createNote,
    deleteNote,
    updateNote,
    getNotes,
    getNoteByID
}