require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const notesRoutes = require('./routes/notes');

const app = express();

// parse JSON
app.use(express.json());

// logger middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// root route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// use routes
app.use('/api/notes', notesRoutes);

// connect to database
mongoose.connect(process.env.MONGO_URI)

  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Server and Database running on port', process.env.PORT);
    });

  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });