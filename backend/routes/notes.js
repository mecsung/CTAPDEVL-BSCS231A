const express = require('express');

const router = express.Router();
const { createNote ,
    deleteNote,
    updateNote,
    getNotes,
    getNotebyID
} = require('../controller/noteController');

router.get('/', getNotes);

router.get('/:id', getNotesbyID);

//Create a new note
router.post('/', createNote );

//Delete a note
router.delete('/:id', deleteNote);

//Update a note
router.patch('/:id', updateNote);


module.exports = router;