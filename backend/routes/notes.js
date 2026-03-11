const express = require('express');

const router = express.Router();

module.exports = router;

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the notes API!' });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `You requested note with ID: ${id}` });
});

router.post('/', (req, res) => {
    res.json({ message: `note created successfully!` });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Note with ID: ${id} deleted successfully!` });
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Note with ID: ${id} updated successfully!` });
});