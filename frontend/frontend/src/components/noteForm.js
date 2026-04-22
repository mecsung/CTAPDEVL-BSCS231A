import { useState } from "react";
import { useNotesContext } from "../hooks/useNotesContext";

const NoteForm = () => {
  const { dispatch } = useNotesContext();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");   
  const [error, setError] = useState(null);     

  const handleSubmit = async (e) => {
    e.preventDefault();
    const note = { title, content };

    const response = await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify(note),
      headers: { "Content-Type": "application/json" },
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "CREATE_NOTE", payload: json });
      setTitle("");
      setContent("");
      setError(null);
    } else {
      setError(json.error || "Failed to add note"); 
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="note-form">
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
      <button type="submit">Add Note</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default NoteForm;
