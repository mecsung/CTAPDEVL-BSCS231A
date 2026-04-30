import { useNotesContext } from "../hooks/useNotesContext";

export function NoteData({ notes }) {
  const { dispatch } = useNotesContext();
  async function deleteNote(id) {
    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete note");
      }

      // If your API returns JSON after deletion
      const result = await response.json();
      console.log(result);

      dispatch({ type: "DELETE_NOTE", payload: result });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async function updateNote(id) {
    const note = notes.find((n) => n._id === id);
    if (!note) return;

    // Prompt user with existing values
    const title = prompt("Enter new title:", note.title);
    if (title === null) return;

    const content = prompt("Enter new content:", note.content);
    if (content === null) return;

    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (!response.ok) {
        throw new Error("Failed to update note");
      }

      const result = await response.json();
      console.log(result);

      // Dispatch update with the updated note
      dispatch({ type: "UPDATE_NOTE", payload: result });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  return (
    <div className="list-wrapper">
      <h2 className="list-header">My Notes</h2>
      {notes ? (
        <ul className="note-list">
          {notes.map((note) => (
            <li key={note._id}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <button onClick={() => deleteNote(note._id)}>DELETE</button>
              <button onClick={() => updateNote(note._id)}>UPDATE</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No notes available.</p>
      )}
    </div>
  );
}
