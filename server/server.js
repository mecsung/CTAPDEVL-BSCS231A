// Imports and packages requirements
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// Initialization of imports, packages and local variables
const app = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const noteRoutes = require("./routes/note");

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

//Route to notes.js
app.use("/api/notes", noteRoutes);

// MongoDB Connection
mongoose.connect(MONGO_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error("Error connecting to MongoDB", error);
});




