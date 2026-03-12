const express = require('express')
const Note = require('../Models/noteModel');

const router = express.Router();

router.get ('/',(req , res) => {
    // res.send('Hello Humans!!');
    res.json({
        Message: 'Hello Humans!!',
        Name: 'Ben Dover',
        Age: 30});
});

router.post('/', async (req, res) => {
    const { title, content } = req.body;

    try {
        const note = await Note.create({title, content});
        res.status(200).json(note);
    }
    catch (error) {
        resizeTo.status(400).json({error: error.message});
    }
    res.json({message: 'Note Created'});
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    res.json({ message: `Note with ID: ${id} deleted successfully` });
});


router.patch('/:id', (req, res) => {
    const {id} = req.params;
    res.json({ message: `Note with ID: ${id} updated successfully` });
})


module.exports = router;