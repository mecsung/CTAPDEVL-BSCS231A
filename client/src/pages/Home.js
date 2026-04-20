import "./Home.css";
import { useEffect } from "react";
import { NoteData } from "../components/NoteData.js";
import { NoteForm } from "../components/NoteForm.js";
import { useNotesContext } from "../hooks/useNotesContext.js";

export default function Home() {
  const { state, dispatch } = useNotesContext();

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch("/api/notes");
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch notes");
      }

      dispatch({ type: "SET_NOTES", payload: data });
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

      <NoteData notes={state.notes} />
    </div>
  );
}
