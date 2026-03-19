const express = require('express');
const router = express.Router();
const controller = require('../controllers/notesController');

router.get('/', controller.getAllNotes);       // GET /api/notes
router.get('/:id', controller.getNoteById);    // GET /api/notes/:id
router.post('/', controller.createNote);       // POST /api/notes
router.put('/:id', controller.updateNote);    // PUT /api/notes/:id
router.delete('/:id', controller.deleteNote); // DELETE /api/notes/:id

module.exports = router;