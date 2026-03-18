const express = require('express');

const router = express.Router();
const {
  createNote,
  getNote,
  getNotebyId,
  deleteNote,
  updateNote,
} = require('../controllers/noteController');

router.get('/',getNote);
 
router.get('/:id', getNotebyId);

router.post('/', createNote);
 
router.delete('/:id', deleteNote);

router.patch('/:id', updateNote);

 module.exports = router;