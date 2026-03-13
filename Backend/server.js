require("dotenv").config();
const express = require("express");
const notesrouter = require("./routes/notes");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/notes", notesrouter);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("✅ MongoDB connected successfully");
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch((err) => {
    console.error("MongoDB connection error:", err.message);
});