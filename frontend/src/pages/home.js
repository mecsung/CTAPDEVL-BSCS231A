import "../components/button.css";
import "./home.css";
import NoteData from "../components/noteData";
import NoteForm from "../components/noteForm";
import { useEffect } from "react";
import { useNotesContext } from "../hooks/useNotesContext";

const Home = () => {
    const { notes, dispatch } = useNotesContext();

    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch("/api/notes");
            const data = await response.json();

            if (response.ok) {
                dispatch({ type: "SET_NOTES", payload: data });
            }
        }
        fetchNotes();
    }, [dispatch])

    return (
        <main className="home-container">
            {/* Dedicated Form Section */}
            <section className="form-section">
                <div className="form-card">
                    <h2 className="section-title">Paghimo og Bag-ong Nota</h2>
                    <NoteForm />
                </div>
            </section>

            {/* Notes Display Section */}
            <section className="notes-section">
                <h2 className="section-title">Imong mga Nota</h2>
                <div className="notes-grid">
                    {notes && notes.map((note) => (
                        <NoteData key={note._id} note={note}/>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Home;