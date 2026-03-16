require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const ToNotes = require('./routes/notes');
const app = express();

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/notes', ToNotes);

//connect and start server
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/notesdb').then(() => {
    app.listen(PORT, () => {
        console.log(`Server and database are running on port ${PORT}`);
    });
}).catch((error) => {
    console.error('Error connecting to MongoDB: ', error);
    // Fallback: start server without DB
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT} (DB connection failed)`);
    });
});

