require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const notesRoutes = require('./routes/notes.js');

// Create an instance of the Express application
const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Use the noutes routes
app.use('/api/notes', notesRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Server and Database are running on port', process.env.PORT);
    })
}).catch((error) => {
    console.error('Error connecting to MongoDB: ', error)
})

//session2