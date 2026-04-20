import { useEffect, useState } from "react";
import { useNotesContext } from '../hooks/useNotesContext';
import NoteData from "../components/NoteData";
import NoteForm from "../components/NoteForm";

const Home = () => {
    const { notes, dispatch } = useNotesContext()
//   const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch("/api/notes");
      const json = await response.json();

      if (response.ok) {
        // setNotes(json);
        dispatch({ type: 'SET_NOTES', payload: json})
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="home">
      <h1>What's up sir</h1>
      <h2>This is my empty app</h2>
      <h3>scroll down to see footer</h3>
      <NoteForm />

      <div className="notes">
        {notes && notes.map((note) => (
          <NoteData key={note._id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default Home;
