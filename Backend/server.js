require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const dns = require('dns');

const notesRouter = require('./routes/notes');
const app = express();

// Middleware to parse JSON
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/notes', notesRouter);

dns.setServers(['8.8.8.8', '1.1.1.1']);

//connect MongoDB and start the server
mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Server and Database are running on port', process.env.PORT);
    })
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error)
});

app.use((req, res) => {
    console.log(req.path, req.method);
    next();
});