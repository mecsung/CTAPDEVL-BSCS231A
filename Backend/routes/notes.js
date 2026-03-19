const express = require('express');
const router = express.Router();
 
const { createNote, 
  deleteNote,
  updateNote,
  getNote,
  getNotebyId,
}
  = require ('../controllers/noteController');

router.get('/', getNote);

 //Display a specific note by ID
router.get('/:id', getNotebyId);

 //Create a new note
router.post('/', createNote);

//Delete a note by ID
router.delete('/:id', deleteNote);

//Update a note by ID
router.patch('/:id', updateNote);
   
module.exports = router;