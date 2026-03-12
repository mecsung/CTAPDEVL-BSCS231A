require('dotenv').config();

const express = require('express');
//mongoose
const mongoose = require('mongoose');

const notesRoutes = require('./routes/notes');

// const uri = process.env.MONGO_URI;
// if (!uri) {
//     console.error('MongoDB URI is not defined in the environment variables.');
//     process.exit(1);
// }
//Instance of express
const app = express();
app.use(express.json());

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/notes', notesRoutes);


//connect to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then ( () => {
    app.listen(process.env.PORT, () => {
        console.log('Server and database running  on port', process.env.PORT);
    });
}).catch((error) => {
        console.error('Error Connecting to mongo', error);
    });