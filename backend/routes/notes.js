const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Notes API!' });
});

router.get('/:id', (req, res) => {
  const {id } = req.params;
  res.json({ message: 'You requested note with ID: ${id}' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Note created successfully!' });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: 'Note with ID: ${id} deleted successfully!' });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: 'Note with ID: ${id} updated successfully!' });
});

module.exports = router;