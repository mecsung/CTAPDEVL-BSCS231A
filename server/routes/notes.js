const express = require('express');
const { createNote,
    delNote,
    upNote,
    getNote,
    getNotebyId } = require('../controllers/noteCtrl');
const router = express.Router();

//GET notes
router.get('/', getNote);

//GET ID
router.get('/:id', getNotebyId);

//POST
router.post('/:id', createNote);


//UPDATE
router.patch('/:id', upNote);

//DELETE
router.delete('/:id', delNote);


module.exports = router;   