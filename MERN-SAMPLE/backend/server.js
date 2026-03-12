require('dotenv').config();

const express = require('express');

// Create an instance of the Express application
const app = express();

// Basic route to test the server
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server is running on port ', process.env.PORT);
});