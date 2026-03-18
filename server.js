<<<<<<< HEAD
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


=======
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const notesRouter = require('./routes/notes');

const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/notes', notesRouter);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
>>>>>>> dc671cc1 (Add files via upload)
