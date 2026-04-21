import { useEffect } from "react";
import NoteForm from "../components/noteForm";
import NoteData from "../components/noteData";
import { useNotesContext } from "../hooks/useNotesContext";

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
        <section className="home-hero">
            <h1>Welcome to AppNote!</h1>
            <p>Create your notes here — your thoughts deserve better attendance than your father at family events</p>
        </section>

        <div className="home-layout">
            <NoteForm />

            <div className="notes-panel">
            <div className="note-panel_header">
                <h2>Your Notes</h2>
                <p>All your thoughts in one place — unlike you, you’re a mess</p>
            </div>

            <div className="notes">
                {notes &&
                notes.map((note) => (
                    <NoteData key={note._id} note={note} />
                ))}
            </div>
            </div>
        </div>
        </div>
    );
    };

export default Home;
