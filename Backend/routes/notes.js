const express = require('express');
const router = express.Router();
 
const { createNote, 
  deleteNote,
  updateNote,
  getNotes,
  getNoteById }
  = require ('../controller/noteModels');

router.get('/', getNotes);

 //Display a specific note by ID
router.get('/:id', getNoteById);

 //Create a new note
router.post('/', createNote);

//Delete a note by ID
router.delete('/:id', deleteNote);

//Update a note by ID
router.patch('/:id', updateNote);
   
module.exports = router;