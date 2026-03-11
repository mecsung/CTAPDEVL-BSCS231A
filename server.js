require('dotenv').config();
const express = require('express');
const notesRoutes = require('./routes/notes'); // path points to the file we just created

const app = express();

// parse JSON
app.use(express.json());

// logger
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// use routes
app.use('/api/notes', notesRoutes);

app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT);
});

// root route
app.get('/', (req, res) => {
  res.send('Hello World');
});


