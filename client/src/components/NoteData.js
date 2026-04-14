import { useEffect, useState } from "react";

export function NoteData() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch("/api/notes");
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch notes");
        }
        setNotes(data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className="list-wrapper">
      <h2 className="list-header">My Notes</h2>
      {notes.length > 0 ? (
        <ul className="note-list">
          {notes.map((note) => (
            <li key={note._id}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No notes available.</p>
      )}
    </div>
  );
}
