const express = require('express');
const { createNote,
    delNote,
    upNote,
    getNote,
    getNotebyId } = require('../controllers/noteCtrl');
    
const requireAuth = require('../middleware/requireAuth')
const router = express.Router();

router.use(requireAuth);

//GET notes
router.get('/', getNote);

//GET ID
router.get('/:id', getNotebyId);

//POST
router.post('/', createNote);

//UPDATE
router.patch('/:id', upNote);

//DELETE
router.delete('/:id', delNote);


module.exports = router;   