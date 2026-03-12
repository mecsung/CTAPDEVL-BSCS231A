const express = require('express');
const Note = require('../models/nodeModel');
const router = express.Router();


router.get('/', (req, res) => {  
    res.json({ 
        message: 'Hello World! subasaskrayb 2 my yutube chanil',
        name: 'Subas',
        age: 30,
        hobbies: ['coding', 'gaming', 'traveling']
    });
});

router.post('/',async (req,res) => {
    const{title, content} = req.body
    try{
        const note = await Note.create ({title, content });
        res.status(200).json(note);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
    res.json({message: 'Note created successfully!'});
});

module.exports = router;
