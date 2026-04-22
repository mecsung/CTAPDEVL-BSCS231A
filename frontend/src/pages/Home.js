import { useState } from "react";
import { useNotesContext } from "../hooks/useNotesContext";

function Home() {
  const { notes, dispatch } = useNotesContext();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddNote = () => {
    if (!title.trim() || !content.trim()) return;

    const newNote = {
      id: Date.now(),
      title,
      content
    };

    dispatch({ type: "CREATE_NOTE", payload: newNote });

    setTitle("");
    setContent("");
  };

  return (
    <div className="container">
      <h1 className="page-title">Home Page</h1>
      <p>Welcome to my React App</p>

      <div className="note-form">
        <h2>Add New Note</h2>

        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Note Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button onClick={handleAddNote}>Add New Note</button>
      </div>

      <div className="notes-list">
        <h2>Notes</h2>

        {notes.length === 0 && <p>No notes yet...</p>}

        {notes.map((note) => (
          <div key={note.id} className="note-card">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;