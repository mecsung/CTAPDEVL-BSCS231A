require('dotenv').config();

const express = require('express');
const mongoose =require('mongoose');

const notesRouter = require('./routes/notes');
const app = express();
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});
// ROUTE TO NOTES
app.use('/api/notes', notesRouter);
mongoose.connect(process.env.MONGO_URI).then(() =>{
    app.listen(process.env.port, () => {
        console.log('Server and database are running on port', process.env.port);
    })
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
