import { useEffect, useState } from "react";
import { useNotesContext } from "../hooks/useNotesContext";

import NoteData from "../components/NoteData";
import NoteForm from "../components/NoteForm";

const Home = () => {
    const { notes, dispatch } = useNotesContext();

    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch('/api/notes');
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_NOTES', payload: json });
            }
        };

        fetchNotes();
    }, [dispatch]);

   return (
    <div className="home">

        {/* LEFT SIDE */}
        <div className="home-left">
            <h1>Hello World, World Hello!</h1>
            <p>This is the Home Page</p>
            <button className="btn-primary">Click here!</button>
        </div>

        {/* RIGHT SIDE */}
        <div className="home-right">
            <h2>Your Notes</h2>

            <div className="notes">
                {notes && notes.map((note) => (
                    <NoteData key={note._id} note={note} />
                ))}
            </div>

            <NoteForm />
        </div>

    </div>
);
};

export default Home;