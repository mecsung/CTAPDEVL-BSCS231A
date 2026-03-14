const express = require('express');

const router = express.Router();

// GET notes all
router.get('/', (req, res) => {
    res.json({
        message: '¡Vamos!',
        name: 'monsi',
        age: 21
    });
});

// GET single note with ID; display
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `You requested note with ID: ${id}` });
});

// POST create a new note
router.post('/', (req, res) => {
    res.json({message: 'i text a postcard sent to you, did it go through?'});
});

// DELETE a note by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json(`Your requested note with ID: ${id} has been deleted.`);
});

// PATCH update a note
router.patch('/:id', (req,res) => {
    const { id } = req.params;
    res.json({
        message: `Hello World! updated with ID: ${id}`,
        name: "monsimonsi",
        age: 1
    });
});

module.exports = router;