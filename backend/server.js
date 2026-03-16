require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const notesRoutes = require('./routes/notes');

const app = express();
const PORT = process.env.PORT || 4000;

// 1. JSON Parser Middleware
app.use(express.json());

// 2. Logging Middleware
app.use((req, res, next) => {
    console.log(`${req.method} request to: ${req.path}`);
    next();
});

// 3. API Routes
app.use('/api/notes', notesRoutes);

// 4. Base Route
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Notes API' });
});

// 5. 404 Handler (JSON format)
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// 6. Connect to MongoDB & Start Server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(` Connected to DB & Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error(' Database connection error:', error.message);
    });