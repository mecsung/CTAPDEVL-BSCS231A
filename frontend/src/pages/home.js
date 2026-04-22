import { useEffect } from "react";
import { useNotesContext } from "../hooks/useNotesContext.js";

import NoteData from "../components/NoteData";
import NoteForm from "../components/NoteForm";

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
            <h1>Yer a wizard, Harry!</h1>

            <img
                src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnQ1cTRyNHA4dWh5eTIyNHR6b2VkYnYydDRzOWVxbDBiaHVhd3g4eCZlcD12MV9pbnRlcm5hbGZfYnlfaWQmY3Q9Zw/eax0rh3OERAYg/giphy.gif"
                alt="Hagrid"
            />

            {/* Notes list */}
            <div className="notes">
                {notes && notes.map((note) => (
                    <NoteData key={note._id} note={note} />
                ))}
            </div>

            {/* Form */}
            <NoteForm />
        </div>
    );
};

export default Home;