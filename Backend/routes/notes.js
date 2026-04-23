const express = require('express');
const { createNote, getSingleNote, getAllNote, UpdateNote, deleteNote } = require('../controllers/noteControllers');

const router = express.Router();

// Define your routes here
router.get('/', getAllNote);

//Get single note
router.get('/:_id',getSingleNote);

// router.get('/:id', (req, res) => {
//     const {id} = req.params;
//     res.json({ message: `requested note with ID: ${id}`});
// });

//Create a new note
router.post('/:_id',createNote);

// this line of comment in this code is moved in noteControllers.js
// router.post('/', async (req, res) => {
//     const { title, content } = req.body;

//     try{
//         const note = await Note.create({ title, content })
//         res.status(200).json(note);
//     }
//     catch (error){
//         res.status(400).json({ error: error.message });
//     }
//     res.json({ message: 'Note created successfully' });
// });

//Delete a note
router.delete('/:_id', deleteNote);

// this line of comment in this code is moved in noteControllers.js
// router.delete('/:id', (req, res) => {
//     const {id} = req.params;
//     res.json({ message: `Note with ID: ${id} deleted successfully` });
// });

//Update a note
router.patch('/:id', UpdateNote)

// this line of comment in this code is moved in noteControllers.js
    // const {id} = req.params;
    // res.json({ message: `Note with ID: ${id} updated successfully` });

module.exports = router;