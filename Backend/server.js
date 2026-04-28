require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const notesRouter = require('./routes/notes');

const app = express();

// middleware
app.use(express.json());

// logger
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/notes', notesRouter);

// default PORT
const PORT = process.env.PORT || 4000;

// 1. START SERVER FIRST (always runs)
app.listen(PORT, () => {
    console.log('Server running on port', PORT);
});

// 2. CONNECT DATABASE AFTER
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });