const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());


// Temporary in-memory notes
let notes = [
  { _id: 1, title: "Gym", content: "Jogging @5 AM" },
  { _id: 2, title: "Study", content: "React project" }
];

// GET all notes
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// POST new note
app.post("/api/notes", (req, res) => {
  const note = { _id: Date.now(), ...req.body };
  notes.push(note);
  res.json(note);
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

