const express = require('express');
const { createNote } = require('../controllers/noteController');

const router = express.Router();

router.get('/',getNote);
 
router.get('/:id', getNoteID);

router.post('/', createNote);
 
router.delete('/:id', deleteNote);

router.patch('/:id', updateNote);

 module.exports = router;