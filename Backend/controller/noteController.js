const Note = require('../models/nodeModel');

// Get all notes
const getAllNote = async (req,res) => {
    const notes = await Note.find({}).sort({createdAt: -1});
    res.status(200).json(notes);
};
// get a single note
const getSingleNote = async (req,res) => {
    const {id} = req.params;
    const note = await Note.findById(id);
    if(!note){
        return res.status(404).json({error: 'Note not found'});
    }
    res.status(200).json(note);
}
// create a new note
const createNote = async (req,res)=> {
    const{title, content} = req.body;
    try{
        const note = await Note.create ({title, content });
        res.status(200).json(note);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
    res.json({message: 'Note created successfully!'});
};

// Delete a note by id 
const deleteNote = async (req,res) => {
    const {id} = req.params;
    const note = await Note.findByIdAndDelete(id);
    if(!note){
        return res.status(404).json({error: 'Note not found'});
    }
    res.status(200).json({message: 'Note deleted successfully!'});
}; 
// Update a note by id 
const updateNote = async (req,res) => {
    const {id} = req.params;
    const {title, content} = req.body;
    const note = await Note.findByIdAndUpdate(id, {title, content}, {new: true});
    if(!note){
        return res.status(404).json({error: 'Note not found'});
    }
    res.status(200).json(note);
};
module.exports = {
    createNote,
    getAllNote,
    getSingleNote,
    deleteNote,
    updateNote,
}