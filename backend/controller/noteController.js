const Note = require('../models/noteModel');

//Get all notes
const getNotes = async (req, res) => {
    const notes = await Note.find({}).sort({ createdAt: -1});
    res.status(200).json(note);
};

//Get a specific note by ID
const getNotebyID = async (req, res) => {
    const { id} = req.params;
    const note = await Note.findById(id);

    if(!note){
        return res.status(404).json({error: 'Note not Found'});
    }
    res.status(200).json(note);
};

//Create a new note
const createNote = async (req, res) => {
    const {title, content} = req.body;

    try{
    const note = await Note.create({title, content});
    res.status(201).json(note);
    }
    catch (error){
        res.status(404).json({error: error.message});
    }
    res.json({message: 'Note created successfully!'});
}

//Delete a note by ID 
const deleteNote = async (req, res) => {
    const { id} = req.params;
    const note = await Note.findByIdAndDelete(id);

    if(!note){
        return res.status(404).json({error: 'Note not Found'});
    }
    res.status(200).json({message: 'Note deleted successfully!'});
};

//Update a note by ID 
const updateNote = async (req, res) => {
    const { id} = req.params;
    const { title, content} = req.body;

    const note = await Note.findByIdAndUpdate(id, {title, content}, {new: true});

    if(!note){
        return res.status(404).json({error: 'Note not Found'});
    }
    res.status(200).json(note);
};

module.exports = {
    createNote,
    deleteNote,
    updateNote,
    getNotes,
    getNotebyID
}