require('dotenv').config();

const express = require('express');

//MongoDB require
const mongoose = require('mongoose');

//Routing
const ToNotes = require('./routes/notes');
const app = express();

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use(express.json());
app.use('/api/notes', ToNotes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Server is running on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.error('OY MAY ERROR KA:', error);
    });


app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});
