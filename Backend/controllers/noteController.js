const { castObject } = require("../models/noteModels");

const Note = require ("../models/noteModels");

//get method
const getNotes = async (req, res) => {
    const notes = await Note.find({}).sort({ createdAt: -1 });
    res.status(200).json(notes);
};

//get method with id
const getNoteWithId = async (req, res) => {
    const { id } = req.params;
    const note = await Note.findById(id);

    if (!note){
        return res.status(404).json({error: "Note not found."});
    }
    res.status(200).json(note);
};

//create method
const createNote = async (req, res) => {
    const { title, content } = req.body;

    try {
        const note = await Note.create({ title, content });
        res.status(200).json(note);
    }catch (error) {
        res.status(400).json({ error: error.message });
    }
    res.json({ message: "Note created successfully." });
};

//delete method
const deleteNote = async (req, res) => {
    const { id } = req.params;
    const note = await Note.findByIdAndDelete(id);

    if (!note){
        return res.status(404).json({error: "Note not found."});
    }
    
    res.json({ message: "Note deleted successfully." });
};

//update method
const updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const note = await Note.findByIdAndUpdate(id, { title, content }, { new: true });

    if (!note){
        res.status(404).json({error: "Note not found."});
    }
    res.status(200).json(note);
};

module.exports = {
    getNotes,
    getNoteWithId,
    createNote,
    deleteNote,
    updateNote,
};

console.log(__dirname);