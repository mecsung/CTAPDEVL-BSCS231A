import { useEffect } from "react";
import { useNotesContext } from "../hooks/useNotesContext";

import { Link } from "react-router-dom";

import NoteData from "../components/NoteData";
import NoteForm from "../components/NoteForm";

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

      <section className="hero">
        <h1>Welcome to Manalo_Designs</h1>
        <p>Build modern and clean web applications</p>
        <Link to="/about">
          <button>Learn More</button>
        </Link>
      </section>

      <div className="notes">
        <h1>Add your notes</h1>
        <NoteForm />

        {notes && notes.map((note) => (
          <NoteData key={note._id} note={note} />
        ))}
      </div>

    </div>
  );
};

export default Home;