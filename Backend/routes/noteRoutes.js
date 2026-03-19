const express = require('express');
const router = express.Router();
const controller = require('../controllers/notesController');

router.get('/notes', controller.getAllNotes);
router.get('/notes/:id', controller.getNoteById);
router.post('/notes', controller.createNote);
router.put('/notes/:id', controller.updateNote);
router.delete('/notes/:id', controller.deleteNote);

module.exports = router;