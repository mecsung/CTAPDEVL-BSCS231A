
const express = require('express');
const Note = require('../models/noteModel');
const { createNote, getSingleNote, deleteNote, updateNote, getAllNote } = require('../controllers/noteController');
const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
    res.send('Notes route');
});

//get all notes
router.post('/', getAllNote);

//Get single note
router.post('/', getSingleNote);


//Post create a new Note
router.post('/', createNote);


//Delete a note
router.post('/', deleteNote);

//Update a note
router.post('/', updateNote);

module.exports = router;