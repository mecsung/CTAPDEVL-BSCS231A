require('dotenv').config();

const express = require('express');

const notesRoutes = require('./routes/notes');

// Create an instance of the Express application
const app = express();

// Middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Remove Basic route to test the server

// Use the notes routes 
app.use('/api/notes', notesRoutes)

app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT);
});

