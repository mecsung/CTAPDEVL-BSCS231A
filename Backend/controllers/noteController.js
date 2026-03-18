const Note = require('../models/notesModels');

const getNote = async (req, res) => {
    const notes = await Note.find({}).sort({ createdAt: -1 });
    res.status(200).json(notes);
};

const getNotebyId = async (req, res) => {
    const {id} = req.params;
    const note = await Note.findById(id);

    if (!note) {
        return res.status(404).json({ error: 'Note not found' });
    }
    res.status(200).json(note);

}

//create new note
const createNote = async (req, res) => {
    const {title, content } =req.body;

    try{
        const note = await Note.create({ title, content });
        res.status(200).json(note);
    }
    catch (error){
        res.status(400).json({ error: error.message });
    }
};

const deleteNote = async (req, res) => {
    const {id} = req.params;
    const note = await Note.findByIdAndDelete(id);

    if (!note) {
        return res.status(404).json({ error: 'Note not found' });
    }
    res.status(200).json(note);
};

const updateNote = async (req, res) => {
    const {id} = req.params;
    const {title, content } =req.body;

    const note = await Note.findByIdAndUpdate(
        id,
        { title, content },
        { new: true }
    );

    if (!note) {
        return res.status(404).json({ error: 'Note not found' });
}
    res.status(200).json(note);
}


module.exports = {
    createNote,
    getNotebyId,
    deleteNote,
    updateNote,
    getNote,
};