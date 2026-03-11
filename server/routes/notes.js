const express = require('express');
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
router.post('/', (req, res) => {
    res.json({ message: 'Post request received' });
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