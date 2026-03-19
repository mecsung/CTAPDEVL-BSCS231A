const express = require('express');
const router = express.Router();

const{
    getNotes,
    getNoteWithId,
    createNote,
    deleteNote,
    updateNote
} = require('../controllers/noteController');

//get all notes
router.get("/", getNotes);

//get a note with id
router.get("/:id", getNoteWithId);

//create a note
router.post("/", createNote);

//delete a note
router.delete("/:id", deleteNote);

//update a note
router.patch("/:id", updateNote);

module.exports = router;