const express = require('express');

// Creates a new router object that can have its own routes and middleware
// It's like a mini Express application dedicated to a specific part of your site
const router = express.Router();

// GET notes
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Notes API!' });
});

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

// POST create a new note
router.post('/', (req, res) => {
    res.json({ message: 'Note created successfully!' });
});

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

// Exports the router object so it can be used in other parts of the application
// "module" is the JavaScript file
// Every javascript file is a module
module.exports = router;
