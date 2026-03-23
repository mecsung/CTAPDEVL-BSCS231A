require('dotenv').config();

const express = require('express');

const notesRouter = require('./Routes/notes');

const app = express();


app.use (express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/notes', notesRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});