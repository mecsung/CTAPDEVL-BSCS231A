const express = require('express');

const router = express.Router();

const {

  createNote,

  getNotes,

  getNoteById,

  updateNote,

  deleteNote

} = require('../controller/noteController');

router.get('/', getNotes);

router.get('/:id', getNoteById);

router.post('/', createNote);

router.patch('/:id', updateNote);

router.delete('/:id', deleteNote);

module.exports = router;
 