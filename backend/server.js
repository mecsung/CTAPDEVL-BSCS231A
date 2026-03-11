require('dotenv').config();

const express = require('express');

const notesRouter = require('./routes/notes');  

const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();   
});

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(process.env.PORT, () => {
  console.log('Server is running on port', process.env.PORT);
});

