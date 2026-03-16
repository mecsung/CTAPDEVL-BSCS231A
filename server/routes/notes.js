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
router.get('/', getNotebyId);

//POST
router.post('/', createNote);


//UPDATE
router.get('/', upNote);

//DELETE
router.get('/', delNote);


module.exports = router;   