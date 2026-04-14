import { useState } from "react";

const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const note = { title, content };

    const response = await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (response.ok) {
      setTitle("");
      setContent("");
      setError(null);
      console.log("New note added:", json);
    } else {
      setError(json.error);
      console.error("Error adding note:", json);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add New Note</h3>

      <label>Note Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Note Content:</label>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button>Add Note</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default NoteForm;
