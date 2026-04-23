import { useEffect, useState } from "react";

import NoteData from "../components/NoteData";
import NoteForm from "../components/NoteForm";

const Home = () => {
const [notes, setNotes] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch("/api/notes");
      const json = await response.json();

      if (response.ok) {
        setNotes(json);
      }
    }
    
    fetchNotes();
  }, []);

    return (
    <div className="home">

      <section className="hero">
        <h1>Welcome to Manalo_Designs</h1>
        <p>Build modern and clean web applications</p>
            <button>Click Me!</button>
      </section>

      <div className="notes">
        <h1>Add your notes</h1>
        <NoteForm />
        
        {notes && notes.map((note) => (
          <NoteData key={note._id} note={note} />
        ))}
      </div>

      {/* <section className="features">
        <div className="card">
          <h3>Fast</h3>
          <p>Optimized performance and speed</p>
        </div>
        <div className="card">
          <h3>Clean UI</h3>
          <p>Modern and user-friendly design</p>
        </div>
        <div className="card">
          <h3>Responsive</h3>
          <p>Works on all devices</p>
        </div>
      </section>

      <section className="footer">
        <h2>About This App</h2>
        <p>This is a simple React app with clean UI.</p>
      </section> */}

    </div>
  );
}

export default Home;