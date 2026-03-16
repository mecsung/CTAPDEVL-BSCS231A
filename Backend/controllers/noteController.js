const Note = require('../models/notesModels');

const getNote = async (req, res) => {
    const Notes = await note.find({}).sort({ createdAt: -1});
    res.status(200).json(notes);
    
};

const getNotebyId = async (req, res) => {
    const {id} = req.params;
    const note = await Note.findById(id)

if (!note){
    return res.status(400).json({ error: 'Note not found'});
}
    res.status(200).json(notes);

}

//create new note
const createNote = async (req, res) => {
    const {title, content } =req.body;

    try{
        const note = await Note.create({ title, content });
        res.status(200).json(note);
    }
    catch (error){
        res.status(400).json({error: message});

    }
    res.json({message: 'Note created successfully!'});
};

const deleteNote = async (req, res) => {
    const {id} = req.params;
    const note = await Note.findByIdAndDelete(id);

if (!note) {
    return res.status(400).json({ error: 'Note not found'});
}
    res.status(200).json(notes);
};

const updateNote = async (req, res) => {
    const {id} = req.params;
    const {title, content } =req.body; 

    const note = await note.findByIdAndupdate(id, { title, content }, { new: true });

    if (!note) {
        return res.status(400).json({ error: 'Note not found'});
}
    res.status(200).json(notes);
}


module.exports = {
    createNote,
    getNotebyId,
    deleteNote,
    updateNote,
    getNote,
};

    