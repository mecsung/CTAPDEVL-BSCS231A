require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const notesRoutes = require("./routes/notes");
const Note = require("./models/noteModels");

//middleware
app.use(express.json());

//logger
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//route to notes.js
app.use('/api/notes', notesRoutes);


//connect to db
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server running on http://localhost:`, process.env.PORT);
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
