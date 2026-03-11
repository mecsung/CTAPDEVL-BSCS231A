require('dotenv').config();

const express = require('express');
const ToNotes = require('./routes/notes');
const app = express();

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/notes', ToNotes);

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT);
});

