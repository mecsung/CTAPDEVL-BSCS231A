const express = require('express');

const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
    res.send('Notes route');
});

//get single note
router.get('/:id', (req, res) => {
    const {id} = req.params;
    res.json({ message: `requested note with ID: ${id}`});
});

//Create a new note
router.post('/', (req, res) => {
    res.json({ message: 'Note created successfully' });
});

//post create a new note
router.post('/', (req, res) => {
    res.json({ message: 'Note created successfully' });
});

//delete a note
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    res.json({ message: `Note with ID: ${id} deleted successfully` });
});

//update a note
router.patch('/:id', (req, res) => {
    const {id} = req.params;
    res.json({ message: `Note with ID: ${id} updated successfully` });
})

module.exports = router;