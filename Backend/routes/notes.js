const express = require('express');

const router = express.Router();
<<<<<<< Updated upstream

router.get('/', (req, res) => {
    //    res.send('Hello World');
    res.json({
        message: 'Hello World',
        name: 'John Doe',
        age: 67
    });
})

=======
 
// GET notes all
router.get('/', getNote);
 
// GET single note with ID; display
router.get('/:id', getNote);
 
// POST create a new note
router.post('/', createNote);
 
// DELETE a note by ID
router.delete('/:id', delNote);
 
// PATCH update a note
router.patch('/:id', upNote);
 
>>>>>>> Stashed changes
module.exports = router;