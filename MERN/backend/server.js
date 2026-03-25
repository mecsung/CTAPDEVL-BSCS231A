require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');
const notesRouter = require('./routes/notes');

// Create an instance of the Express application
const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Remove basic route to test the server

// Use the notes router for routes starting with /api/notes
app.use('/api/notes', notesRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB:', mongoose.connection.name);
        app.listen(process.env.PORT, () => {
            console.log('Server is running on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

