import { useEffect, useState } from "react";
import { useNotesContext } from "../hooks/useNotesContext";

import { Link } from "react-router-dom";
import NoteData from "../components/NoteData";
import NoteForm from "../components/NoteForm";

const Home = () => {
  const { notes, dispatch } = useNotesContext();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/notes");

        const text = await response.text();

        let json;
        try {
          json = JSON.parse(text);
        } catch (err) {
          console.log("Invalid JSON response:", text);
          throw new Error("Server did not return JSON");
        }

        if (response.ok) {
          dispatch({ type: "SET_NOTES", payload: json });
        } else {
          setError(json.error || "Failed to fetch notes");
        }
      } catch (err) {
        setError(err.message);
        console.error("Fetch error:", err);
      }
    };

    fetchNotes();
  }, [dispatch]);

  return (
    <div className="home">


      <section className="hero">
        <h1>Welcome to Scheduler</h1>
        <p>Organize your tasks, manage your time, and stay productive every day.</p>
        <Link to="/login" className="btn">Get Started</Link>
      </section>


      <section className="features container">
        <div className="card">
          <h3>Plan Your Day</h3>
          <p>Create schedules and never miss important tasks.</p>
        </div>

        <div className="card">
          <h3>Stay Organized</h3>
          <p>Keep everything in one place and manage time efficiently.</p>
        </div>

        <div className="card">
          <h3>Boost Productivity</h3>
          <p>Track your progress and achieve your goals faster.</p>
        </div>
      </section>


      {error && <p className="error">{error}</p>}


      <NoteForm dispatch={dispatch} />


      <div className="notes">
        {notes &&
          notes.map((note) => (
            <NoteData key={note._id} note={note} />
          ))}
      </div>
    </div>
  );
};

export default Home;