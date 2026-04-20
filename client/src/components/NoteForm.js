import { useState } from "react";
import { NoteData } from "./NoteData";
import { useNotesContext } from "../hooks/useNotesContext.js";

export function NoteForm() {
  const { dispatch } = useNotesContext();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
      const newNote = await response.json();
      setTitle("");
      setContent("");
      dispatch({ type: "CREATE_NOTE", payload: newNote.note });
    } else {
      const errorData = await response.json();
      console.error("Error creating note:", errorData.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <h2 className="form-header">Add New Note</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Add Note</button>
    </form>
  );
}
