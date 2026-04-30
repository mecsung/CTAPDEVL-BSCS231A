import { useEffect } from "react";
import { useNotesContext } from "../hooks/useNotesContext";

import NoteData from "../components/NoteData";
import NoteForm from "../components/NoteForm";
import NoteSearch from "../components/NoteSearch";

const Home = () => {
    const { notes, dispatch, search } = useNotesContext();

    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch("/api/notes");
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_NOTES', payload: json });
            }
        };
        fetchNotes();
    }, [dispatch]);

    const notesArray = Array.isArray(notes) ? notes : [];

    const filteredNotes = notes && notes.filter((note) =>
        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.content.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="home">
            <h1>Welcome to Notes System</h1>
            <p>Your modern, secure, and easy-to-use note-taking platform for National University students.</p>
            <NoteForm />
            <NoteSearch />

            <div className="notes">
                {filteredNotes && filteredNotes.map((note) => (
                    <NoteData key={note._id} note={note} />
                ))}
            </div>
        </div>
    );
};


export default Home;
