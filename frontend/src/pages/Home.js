import { useEffect, useState } from "react";
import NoteData from "../components/NoteData";
import NoteForm from "../components/NoteForm";
import "./Home.css";

const Home = () => {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch("/api/notes");
      const json = await response.json();

      if (response.ok) {
        setNotes(json);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="home">
      <h1>Whats up homie</h1>
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
