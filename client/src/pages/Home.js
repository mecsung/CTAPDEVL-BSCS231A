import { use, useEffect, useState } from "react";
import { useNotesContext } from "../hooks/useNotesContext";

import NoteData from "../components/NoteData";
import NoteForm from "../components/NoteForm";

const Home = () => {
    const { disptach, notes } = useNotesContext()
    //const [notes, dispatch] = useState(null);

    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch("/api/notes");
            const json = await response.json();

            if (response.ok) {
                disptach({ type: "SET_NOTES", payload: json})
            }
        };

        fetchNotes();
    }, []);


    return (
        <div className="home">
            <section className="home-hero">
                <h1>Welcome to your NootsApp!</h1>
                <p>This is where you create, store, and review your notes.</p>
            </section>

            <div className="home-layout">
                <NoteForm />

                <div className="notes-panel">
                    <div className="notes-panel__header">
                        <h2>Notes</h2>
                        <p>Saved entries appear here in reverse chronological order.</p>
                    </div>

                    <div className="notes">
                        {notes && notes.map((note) => (
                            <NoteData key={note._id} note={note} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;