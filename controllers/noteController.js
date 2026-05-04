const Note = require('../models/noteModel');

//get all notes 
const getAllNote = async (req, res) => {
    const notes = await Note.find({}).sort({createdAt: -1});
    res.status(200).json(notes);
};

//get a single note
const getSingleNote = async (req,res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status (404).json({error: 'Note not found'});
    }

    const note = await Note.findById(id);

    if (!note){
        return res.status (404).json({error: 'Note not found'});
    }
    res.status(200).json(note);
};

//create a new note
const createNote = async (req, res) => {
    const { title, content } = req.body;

    try {
        const note = await Note.create({title, content});
        res.status(200).json(note);
    }
    catch (error) {
        res.status(400).json({error:error.message});
    }
    res.json({message : 'Note created successfully!'});
};

//delete a note
const deleteNote = async (req,res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status (404).json({error: 'Note not found'});
    }

    const note = await Note.findByIdDelete(id);

    if (!note){
        return res.status (404).json({error: 'Note not found'});
    }
    res.status(200).json(note);
};

//update a note
const updateNote = async (req,res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status (404).json({error: 'Note not found'});
    }

    const note = await Note.findByIdUpdate(id);

    if (!note){
        return res.status (404).json({error: 'Note not found'});
    }
    res.status(200).json(note);
};


module.exports = {
    createNote,
    deleteNote,
    getAllNote,
    getSingleNote,
    updateNote
};