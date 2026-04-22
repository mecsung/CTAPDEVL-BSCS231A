import { useEffect } from "react";
import { useNotesContext } from "../hooks/useNotesContext";
import NoteData from "../components/noteData";
import NoteForm from "../components/noteForm";
import "./Home.css";

const Home = () => {
  const { notes, dispatch } = useNotesContext();

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch("/api/notes");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_NOTES", payload: json });
      }
    };

    fetchNotes();
  }, [dispatch]);

  return (
    <div className="home">
      <h1>My App</h1>
      <p>Whats up Brother</p>
      <NoteForm dispatch={dispatch} />
      <div className="notes-list">
        {notes && notes.length > 0 ? (
          notes.map((note) => <NoteData key={note._id} note={note} />)
        ) : (
          <p>No notes yet</p>
        )}
      </div>
    </div>
  );
};

export default Home;
