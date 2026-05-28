import { useEffect } from "react";
import { useNotesContext } from "../hooks/useNotesContext";
import { useAuthContext } from "../hooks/useAuthContext";

import NoteData from "../components/NoteData";
import NoteForm from "../components/NoteForm";
import SearchNote from "../components/SearchNote";
import "./Home.css";

const Home = () => {
  const { dispatch, notes, search } = useNotesContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch("/api/notes", {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_NOTES", payload: json });
      }
    };

    if (user) {
      fetchNotes();
    }
  }, [dispatch, user]);

  const filteredNotes = notes && notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase()) ||
    note.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">
      <NoteForm />

      <SearchNote />

      <h1>Whats up homie</h1>

      {filteredNotes && filteredNotes.map((note) => (
        <NoteData key={note._id} note={note} />
      ))}
    </div>
  );
};

export default Home;
