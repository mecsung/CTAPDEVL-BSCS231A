require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const notesRoutes = require('./routes/notes');

const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(`➡️ ${req.method} ${req.path}`);
  next();
});

// Routes
app.use('/api/notes', notesRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Database connection
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, { family: 4 })
  .then(() => {
    console.log('✅ MongoDB connected successfully!');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });