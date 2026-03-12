require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const notesRouter = require('./routes/notes');  

const app = express();

//need to be in middle
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();   
});

app.use('/api/notes', notesRouter);

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

mongoose. connect (process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Server and Database are running on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// app.listen(process.env.PORT, () => {
//   console.log('Server is running on port', process.env.PORT);
// });


