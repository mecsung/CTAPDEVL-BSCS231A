import "./Home.css";
import { useEffect, useState } from "react";
import { NoteData } from "../components/NoteData.js";
import { NoteForm } from "../components/NoteForm.js";

export default function Home() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch("/api/notes");
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch notes");
      }

      setNotes(data);
    };
    fetchNotes();
  }, []);

  return (
    <div className="home">
      <div className="home-greetings">
        <h1>What's up homies!</h1>
        <h2>This is my first React Application</h2>
        <NoteForm />
      </div>

      <NoteData key={notes._id} notes={notes} />
    </div>
  );
}
