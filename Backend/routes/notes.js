const express = require('express');
const Note = require('../models/noteModel');
const router = express.Router();
const {createNote, getAllNote, getSingleNote, deleteNote, updateNote} 
= require('../controller/noteController');

//display
router.get('/', getAllNote);
//create   
router.post('/', createNote);
//Delete   
router.delete('/:id', deleteNote);
//Update 
router.patch('/:id', updateNote);
//get a single note
router.get('/:id', getSingleNote);

module.exports = router;
