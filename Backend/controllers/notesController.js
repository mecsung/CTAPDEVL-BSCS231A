let notes = [];

exports.getAllNotes = (req, res) => {
  res.json(notes);
};

exports.getNoteById = (req, res) => {
  const note = notes.find(n => n.id == req.params.id);
  if (!note) return res.status(404).json({ message: "Note not found" });
  res.json(note);
};

exports.createNote = (req, res) => {
  const newNote = {
    id: Date.now(),
    title: req.body.title,
    content: req.body.content
  };
  notes.push(newNote);
  res.json(newNote);
};

exports.updateNote = (req, res) => {
  const note = notes.find(n => n.id == req.params.id);
  if (!note) return res.status(404).json({ message: "Note not found" });

  note.title = req.body.title;
  note.content = req.body.content;
  res.json(note);
};

exports.deleteNote = (req, res) => {
  const initialLength = notes.length;
  notes = notes.filter(n => n.id != req.params.id);
  if (notes.length === initialLength) return res.status(404).json({ message: "Note not found" });
  res.json({ message: "Deleted" });
};