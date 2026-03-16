const express = require('express');
const Note = require('../models/nodeModel');
const router = express.Router();
const {createNote} = require('../controller/noteController');

//display
router.get('/id', getNotesbyid); 
//create   
router.post('/', createNote);
//Delete   
router.delete('/id', deleteNoteById);
//Update 
router.patch('/id', updateNote);

module.exports = router;
