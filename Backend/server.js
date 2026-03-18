require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const dns = require('dns');

const notesRouter = require('./routes/notes');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/notes', notesRouter);

dns.setServers(['0.0.0.0', '1.1.1.1']);

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