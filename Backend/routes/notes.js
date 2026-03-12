const express = require('express');
const Note = require('../models/noteModel')

const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
    res.send('Notes route');
});

//Get single note
router.get('/:id', (req, res) => {
    const {id} = req.params;
    res.json({ message: `requested note with ID: ${id}`});
});

//Create a new note
router.post('/', async (req, res) => {
    const { title, content } = req.body;

    try{
        const note = await Note.create({ title, content })
        res.status(200).json(note);
    }
    catch (error){
        res.status(400).json({ error: error.message });
    }
    res.json({ message: 'Note created successfully' });
});

//Post create a new note
router.post('/', (req, res) => {
    res.json({ message: 'Note created successfully' });
});

//Delete a note
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    res.json({ message: `Note with ID: ${id} deleted successfully` });
});

//Update a note
router.patch('/:id', (req, res) => {
    const {id} = req.params;
    res.json({ message: `Note with ID: ${id} updated successfully` });
})

module.exports = router;