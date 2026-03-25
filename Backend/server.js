require('dotenv').config();
const express = require('express')

const notesRouter = require('./routes/notes');
const app = express();

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/notes', notesRouter);

<<<<<<< Updated upstream
app.listen(process.env.PORT, () => [
    console.log('Server is running on port 3000!!!', process.env.PORT)
]);
=======
// Root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Database connection
const PORT = process.env.PORT || 3000;

console.log('Mongo URI:', process.env.MONGO_URI); // Debug

mongoose.connect(process.env.MONGO_URI, { family: 4 })
  .then(() => {
    console.log('✅ MongoDB connected successfully!');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Error connecting to MongoDB:', error.message);
  });

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});
sdsad
>>>>>>> Stashed changes
