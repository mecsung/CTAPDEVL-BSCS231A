require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const notesRoutes = require('./routes/notes');

const app = express();

//Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/notes', notesRoutes);

//Database
mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Server and database are running on port', process.env.PORT);
    })
}).catch((error) => {
    console.error('Error connecting to MongDB:', error);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT);
});