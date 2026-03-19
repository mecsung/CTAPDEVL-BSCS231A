const Note = require('../models/noteModel.js');

// Get all notes
const getAllNote = async (req,res) => {
    const notes = await Note.find({}).sort({ createdAt: -1 });
    res.status(200).json(note);
};

// Get a single note
const getSingleNote = async (req,res) => {
    const { _id } = req.params;
    const note = await Note.findById(id);

    if (!note){
        return res.status(404).json({ error: 'Note not found' })
    }
    res.status(200).json(note);
};

// Create a new note
const createNote = async (req, res) => {
    const { _id, title, content } = req.body;

    try{
        const note = await Note.create({ _id, title, content })
        res.status(200).json(note);
    }
    catch (error){
        res.status(400).json({ error: error.message });
    }
    res.json({ message: 'Note created successfully' });
}
    
// Delete a note
const deleteNote = async (req,res) => {
    const { _id } = req.params;
    const note = await Note.findByIdAndDelete(_id);

    if (!note){
        return res.status(404).json({ error: 'Note not found' })
    }
    res.status(200).json({ message: 'Note deleted succesfully!' });
};

// Update a note
const UpdateNote = async (req,res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    const note = await Note.findByIdAndUpdate(_id, { title, content }, { new: true });

    if (!note){
        return res.status(404).json({ error: 'Note not found' })
    }
    res.status(200).json(note);
};

module.exports = {
    getAllNote,
    createNote,
    getSingleNote,
    deleteNote,
    UpdateNote
};