import { useEffect } from "react";
import { useNotesContext } from "../hooks/useNotesContext";

import NoteData from "../components/NoteData";
import NoteForm from "../components/NoteForm";
import SearchNote from "../components/SearchNote";

const Home = () => {
  const { notes = [], dispatch, search } = useNotesContext();

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

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase()) ||
    note.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">
      <h1>LEZZZ GOOO!!!</h1>
      <h2>Welcome to the Home Page</h2>

      <SearchNote />
      
      <div className="home-layout">
        <div className="home-left">
          <div className="notes">
            {filteredNotes.map((note) => (
              <NoteData key={note._id} note={note} />
            ))}
          </div>
        </div>

        <div className="home-right">
          <NoteForm />
        </div>
      </div>


    </div>
  );
};

export default Home;