const express = require('express');
const Note = require('../models/noteModel')

const router = express.Router();

//GET notes
router.get('/', (req, res) => {
    res.json({ message: 'Hello world' });
});

//GET ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Usto ko ng ${id} na itlog` });
});

//POST
router.post('/', async (req, res) => {
    const { title, content } = req.body;

    try {
        const note = await Note.create({ title, content });
        res.status(200).json(note);
    }
    catch (error) {
        res.json({ error: error.message });
    }
    res.json({ message: "May note ka na" })
});

//UPDATE
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Id #${id} is updated` });
});

//DELETE
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Sorry stict ang parents ko ${id} ` });
});


module.exports = router;   