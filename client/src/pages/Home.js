import { useEffect } from "react";
import { useNotesContext } from "../hooks/useNotesContext";

import NoteData from "../components/NoteData";
import NoteForm from "../components/NoteForm";
import SearchNote from "../components/SearchNote";


const Home = () => {
    // const [notes, setNotes] = useState();
    const { notes, dispatch, search } = useNotesContext();

    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch("/api/notes");
            const json = await response.json();

            if (response.ok) {
                // setNotes(json);
                dispatch({ type: "SET_NOTES", payload: json });
            }
        };

        fetchNotes();
    }, [dispatch]);


    const searchTerm = (search ?? "").toLowerCase();

    const filteredNotes = (notes ?? []).filter((note) => {
        const title = (note.title ?? "").toLowerCase();
        const content = (note.content ?? "").toLowerCase();

        return title.includes(searchTerm) || content.includes(searchTerm);
    });

    return (
        <div className="home">
            <section className="home-hero">
                <h1>Welcome to your NootsApp!</h1>
                <p>This is where you create, store, and review your notes.</p>
            </section>

            <div className="home-layout">
                <div className="home-layout__sidebar">
                    <NoteForm />
                </div>

                <div className="notes-panel">
                    <div className="notes-panel__search">
                        <SearchNote />
                    </div>

                    <div className="notes-panel__header">
                        <h2>Your Notes</h2>
                        <p>Saved entries appear here in reverse chronological order.</p>
                    </div>

                    <div className="notes">
                        {filteredNotes && filteredNotes.map((note) => (
                            <NoteData key={note._id} note={note} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;