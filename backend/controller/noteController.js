const Note = require('../models/noteModel');

//get all notes
const getAllNotes = async(req, res) => {
    const notes = await Note.find({}).sort({createdAt: -1});
    res.status(200).json(notes);
}

//get a specific note by 10
const getNoteById = async(req, res) => {
    const {id} = req.params;
    const note = await Note.findById(id);

    if (!note){
        return res.status(404).json({error: 'Note not found'})
    }
    res.status(200).json(note);
}

//create a new note
const createNote = async (req, res) => {
    const { title, content } = req.body;
  
    try {
        const note = await Note.create({title, content});
        res.status(200).json(note);
    }
    catch(error) {
        res.status(400).json({error: error.message});
    }
    res.json({message: 'Note created successfully!'});
  };

//delete a note by 10
const deleteNote = async (req, res) => {
    const {id} = req.params;
    const note = await Note.findByIdAndDelete(id);

    if (!note){
        return res.status(404).json({error: 'Note not found'})
    }
    // res.status(200).json({message: 'Note deleted successfully!'});
    res.status(200).json(note);
}

//update a note by 10
const updateNote = async (req, res) => {
    const {id} = req.params;
    const {title, content} = req.body;

    const note = await Note.findByIdAndUpdate(id, {title, content}, {new: true});

    if (!note){
        return res.status(404).json({error: 'Note not found'});
    }
    res.status(200).json({message: 'Note updated successfully!', note});
}

module.exports = {
    createNote,
    deleteNote,
    updateNote,
    getAllNotes,
    getNoteById
};