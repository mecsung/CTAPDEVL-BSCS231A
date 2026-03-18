//#region 1

const { default: mongoose } = require('mongoose');
const Note = require('../models/noteModel');

// Create a new note
const createNote = async (req, res) => {
    const { title, content } = req.body;

    try {
        const note = await Note.create({ title, content });
        res.status(200).json({
            message: 'Note created successfully!',
            note: note
        });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }

    // This line is commented because you can only send one response per request!
    // res.json({ message: 'Note created successfully!' });
};

// Get all notes
const getAllNotes = async (req, res) => {
    // -1 means sort in descending order (newest first)
    const notes = await Note.find({}).sort({ createdAt: -1 });
    res.status(200).json(notes);
};

// Get a single note
const getSingleNote = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Note not found' });
    }

    const note = await Note.findById(id);

    if (!note) {
        return res.status(404).json({ error: 'Note not found' });
    }
    res.status(200).json(note);
}

//#endregion

//#region 2

// Delete a single note
const deleteSingleNote = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Note not found' });
    }

    const note = await Note.findByIdAndDelete(id);

    if (!note) {
        return res.status(404).json({ error: 'Note not found' });
    }
    
    res.status(200).json({ message: `Note with ID: ${id} deleted successfully!` });
}

// Update a single note
const updateSingleNote = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Note not found' });
    }

    // "new: false" returns the document as it was before update was applied, in this case it's,
    // oposite of what we want, we want the updated note, so we set "new: true"
    const note = await Note.findByIdAndUpdate(id, { title, content }, { new: true });

    if (!note) {
        return res.status(404).json({ error: 'Note not found' });
    }
    
    res.status(200).json({
        message: 'Note updated successfully!',
        note: note
    });
}

//#endregion

module.exports = {
    createNote,
    getAllNotes,
    getSingleNote,
    deleteSingleNote,
    updateSingleNote
};