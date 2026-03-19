// Backend/server.js
require('dotenv').config();          // Make sure this is first
const express = require('express');
const app = express();

// Parse JSON bodies for POST/PUT requests
app.use(express.json());

// Import routes
const notesRouter = require('./routes/notes');

// Logging middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Use the routes
app.use('/api/notes', notesRouter);

// Set port from .env or default to 3000
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});