const express = require('express');
const {
  createNote,
  getNote,
  getNotebyId,
  deleteNote,
  updateNote,
} = require('../controllers/noteController');

const router = express.Router();

router.get('/',getNote);
 
router.get('/:id', getNotebyId);

router.post('/', createNote);
 
router.delete('/:id', deleteNote);

router.patch('/:id', updateNote);

 module.exports = router;