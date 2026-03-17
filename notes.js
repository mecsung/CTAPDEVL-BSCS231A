const express = require('express');
const { createNote, getAllNote, getSingleNote, deleteNote, updateNote } = require('../controllers/noteController');

const router = express.Router();

// GET notes
router.get('/', getAllNote);

// router.get('/', (req, res) => {
//     res.json({ message: 'Welcome to the Notes API!' });
// });

// GET single note
router.get('/:id', getSingleNote);

// router.get('/:id', (req, res) => {
//     const { id } = req.params;
//     res.json({ message: `You requested note with ID: ${id}` });
// });

//POST create a new note
router.post('/', createNote);

// router.post('/', async (req, res) => {
//     const { title, content } = req.body;

//     try {
//         const note = await Note.create({ title, content });
//         res.status(200).json(note);
//     }
//     catch (error) {
//         res.status(400).json({ error: error.message });
//     }
//     res.json({ message: 'Note created succesfully!' });
// });

// DELETE a note
router.delete('/:id', deleteNote);

// router.delete('/:id', (req, res) => {
//     const { id } = req.params;
//     res.json({ message: `Note with ID: ${id} deleted successfully!` });
// });

// UPDATE a note
router.patch('/:id', updateNote);

// router.patch('/:id', (req, res) => {
//     const { id } = req.params;
//     res.json({ message: `Note with ID: ${id} updated successfully!` });
// });

module.exports = router;