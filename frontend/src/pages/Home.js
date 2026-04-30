import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNotesContext } from '../hooks/useNotesContext';
import NoteData from '../components/NoteData';
import NoteForm from '../components/NoteForm';
import NoteSearch from '../components/NoteSearch';
import '../css/home.css';
 
const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { notes, dispatch } = useNotesContext()
 
    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch("/api/notes");
            const json = await response.json()
 
            if(response.ok) {
                dispatch({ type: 'SET_NOTES', payload: json})
            }
        }
        fetchNotes()
 
    }, [dispatch]
 
    );
 
    useEffect(() => {
        const interval = setInterval(() => {
            // Counter logic for rotating notes
        }, 3000); // Change note every 3 seconds
 
        return () => clearInterval(interval);
    }, []);
 
const addNoteToList = (newNote) => {
        dispatch({ type: 'CREATE_NOTE', payload: newNote });
    };

    const filteredNotes = notes?.filter((note) => {
        const query = searchTerm.toLowerCase();
        const title = note.title?.toLowerCase() || '';
        const content = note.content?.toLowerCase() || '';
        return title.includes(query) || content.includes(query);
    }) || [];
           
    return (
        <div className="home-container">
            <div className="floating-note note-green"></div>
            <div className="floating-note note-yellow"></div>
            <div className="floating-note note-red"></div>
            <div className="floating-note note-pink"></div>
            <div className="floating-note note-blue"></div>
 
            <section className="hero">
                <div className="hero-content">
                    <h1>Express yourself, <br /><span>a note at a time.</span></h1>
                    <p>The simplest way to keep track of your thoughts, tasks, and daily inspirations.</p>

                    <NoteForm onAddNote={addNoteToList} />
                    <NoteSearch searchTerm={searchTerm} onSearch={setSearchTerm} />

                    <div className="notes-section">
                        <h2>Existing Notes</h2>
                        <div className="notes">
                            {
                                filteredNotes.length > 0 ? (
                                    filteredNotes.map((note) => (
                                        <NoteData key={note._id || note.id} note={note} />
                                    ))
                                ) : (
                                    <p className="note-preview">No notes available yet.</p>
                                )
                            }
                        </div>
                    </div>
                 
                </div>
            </section>
        </div>
    );
}
 
export default Home;