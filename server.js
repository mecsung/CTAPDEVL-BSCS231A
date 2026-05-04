require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const notesRoutes = require('./routes/notes');

const app = express();


app.use(cors()); 
app.use(express.json());


app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});


app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.use('/api/notes', notesRoutes);


const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log('MongoDB connected successfully');

    const PORT = process.env.PORT || 4000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error('MongoDB connection failed:');
    console.error(error.message);

    process.exit(1);
  }
};

startServer();