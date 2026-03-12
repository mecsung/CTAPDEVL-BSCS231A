require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const notesRouter = require('./routes/notes');
const app = express();

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use(express.json());
app.use('/api/notes', notesRouter);

//connect MongoDB and start the server
mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Server and Database are running on port', process.env.PORT);
    })
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error)
});
