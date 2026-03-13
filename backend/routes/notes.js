//#region 1

const express = require('express');

// Creates a new router object that can have its own routes and middleware
// It's like a mini Express application dedicated to a specific part of your site
const router = express.Router();

/*

// GET all notes
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Notes API!' });
});

*/

/*

// GET single note
// the colon in /:id tells Express to capture that part of the URL,
// and put it in req.params with the name 'id'
router.get('/:id', (req, res) => {
    // This is called destructering
    // It's a JS shortcut to extract values from objects or arrays
    // Same as const id = req.params.id
    const { id } = req.params;
    res.json({ message: `You requested node with ID: ${id}` });
});

*/

/* Check the region 2 for the modified code

// POST create a new note
router.post('/', (req, res) => {
    res.json({ message: 'Note created successfully!' });
});

*/

// DELETE a note
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Note with ID: ${id} deleted successfully!` });
});

// UPDATE a note
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Note with ID: ${id} updated successfully!` });
});

//#endregion

//#region 2

const Note = require('../models/noteModel');

// POST create a new note
// "async" means this function will run asynchronously, allowing us to use await inside it
// "async" gives the function the ability to pause/resume
// Normal functions cannot pause, they execute completely in one go
/*

router.post('/', async (req, res) => {
    const { title, content } = req.body;

    try {
        // "await" is used to wait for the Note.create() operation to complete before moving on
        const note = await Note.create({ title, content });
        res.status(200).json(note);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    res.json({ message: 'Note created successfully!' });
});

*/

//#endregion

//#region 3

const { createNote, getAllNotes, getSingleNote } = require('../controllers/noteController');

// POST create a new note
router.post('/', createNote);

// GET all notes
router.get('/', getAllNotes);

// GET single note
router.get('/:id', getSingleNote);

//#endregion

// Exports the router object so it can be used in other parts of the application
// "module" is the JavaScript file
// Every javascript file is a module
module.exports = router;