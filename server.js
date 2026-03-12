require('dotenv').config();

const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Import notes routes
const notesRoutes = require('./routes/notes');

// Log every request path + method
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Root route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Mount notes routes under /notes
app.use('/notes', notesRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});