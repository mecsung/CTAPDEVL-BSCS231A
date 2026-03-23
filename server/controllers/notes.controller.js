import Note from "../models/noteModel.js";

export const getAllNotes = async (req, res) => {
  const notes = await Note.find({}).sort({ created_at: -1 });
  res.status(200).json(notes);
};

export const getSingleNote = async (req, res) => {
  const { id } = req.params;
  const note = await Note.findById(id);

  if (!note) {
    return res.status(404).json({ error: "Note not Found!" });
  }

  res.status(200).json(note);
};

export const createNote = async (req, res) => {
  const { title, content } = req.body;

  try {
    const note = await Note.create({ title, content });
    res.status(200).json({ note, message: "Note created Succesfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteNote = async (req, res) => {
  const { id } = req.params;

  const note = await Note.findByIdAndDelete(id);

  if (!note) {
    return res.status(404).json({ error: "Note not Found!" });
  }

  res.status(200).json({ message: "Note Deleted Successfully" });
};

export const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const note = await Note.findByIdAndUpdate(
    id,
    { title, content },
    { new: true },
  );

  if (!note) {
    return res.status(404).json({ error: "Note not Found!" });
  }

  res.status(200).json({ message: note });
};
