import '../styles/Homepage.css';
import { useEffect } from "react";
import NoteData from "../components/NoteData";
import NoteForm from "../components/NoteForm";
import SearchNote from '../components/SearchNote';
import { useNotesContext } from '../hooks/useNotesContext';


const Homepage = () => {
    const { notes, dispatch, search } = useNotesContext();

    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch("/api/notes")
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_NOTES', payload: json })
            }
        }

        fetchNotes()
    }, [dispatch])

    const filteredNotes = notes && notes.filter((note) =>
        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.content.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="home">
            <h1>Home Page</h1>

            <NoteForm />

            <SearchNote />

            <div className="notes">
                {filteredNotes && filteredNotes.map((note) => (
                    <NoteData key={note._id} note={note} />
                ))}
            </div>

        </div>
    );
}

export default Homepage;