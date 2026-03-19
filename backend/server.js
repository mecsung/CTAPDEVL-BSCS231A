require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose'); //MongoDB require
const ToNotes = require('./routes/notes'); //Routing
const app = express();
const dns = require('dns');

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use(express.json());
app.use('/api/notes', ToNotes);

dns.setServers(['8.8.8.8', '8.8.4.4']);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Server is running on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.error('Error:', error);
    });


app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});