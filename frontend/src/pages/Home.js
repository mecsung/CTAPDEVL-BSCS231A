import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NoteData from '../components/NoteData';
import NoteForm from '../components/NoteForm';
import '../css/home.css';

const Home = () => {
    const [notes, setNotes] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            // Counter logic for rotating notes
        }, 3000); // Change note every 3 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await fetch("/api/notes");
                if (response.ok) {
                    const json = await response.json();
                    setNotes(json);
                }
            } catch (error) {
                console.error("Error fetching notes:", error);
            }
        }
        fetchNotes();
    }, []);

    const addNoteToList = (newNote) => {
        setNotes((prevNotes) => [newNote, ...(prevNotes || [])]);
    };
            
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

                    <div className="notes">
                        {
                            notes?.length > 0 ? (
                                notes.map((note) => (
                                    <NoteData key={note._id || note.id} note={note} />
                                ))
                            ) : (
                                <p className="note-preview">No notes available yet.</p>
                            )
                        }
                    </div>
                    <div className="cta-buttons">
                        <Link to="/Login" className="btn-primary">Get Started, It's Free!</Link>
                        <Link to="/About" className="btn-secondary">Learn More</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;