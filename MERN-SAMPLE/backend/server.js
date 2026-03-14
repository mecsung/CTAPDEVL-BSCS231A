require('dotenv').config();

const express = require('express');

const notesRoutes = require('./routes/notes');

// Create an instance of the Express application
const app = express();

// Middleware
app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});

// Remove Basic route to test the server
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// Use the notes routes
app.use('/api/notes', notesRoutes);

app.listen(process.env.PORT, () => {
    console.log('Server is running on port ', process.env.PORT);
});