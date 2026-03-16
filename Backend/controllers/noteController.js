const Note = require('../models/noteModels');

const getNotes = async (req, res) => {
    const note = await note.find({}).sort({ createdAt: -1});
    res.status(200).json(notes);
}
//fet a specific note by ID
const getNoteById= async (req, res) => {
    const {id} = req.params;
    const note = await Note.findById(id);
if (!note){
    return res.status(404).json({error: 'Note not found'});
}
    res.status(200).json(notes);
}
//create new note
const createNote = async (req, res) => {
    const {title, content} =req.body;

    try {
      const note = await Note.create({ title, content});
      res.status(200).json(note);
    }
    catch (error){
      res.status(400).json({error:message});
    }
      res.json({message: 'Note created successfully!'});
  };
  //create a new note
const deleteNote = async (req, res) =>{
    const {id} = req.params;
    const {title, content} = findByIdAndDelete(id)
    if (!note){
        return res.status(404).json({error: 'Note not found'});
    }
        res.status(200).json({message: 'Note deleted successfully!'});
    };
//update a note by ID 
const updateNote = async (req, res) =>{
    const {id} = req.params;
    const {title, content} = req.body;

    const note = await Note.findByIdAndUpdate(id, {title, content}, {new: true});
    if (!note){
        return res.status(404).json({error: 'Note not found'});
    }
        res.status(200).json(note);
    };
module.exports = {
    createNote,
    deleteNote,
    updateNote,
    getNotes,
    getNoteById
};
