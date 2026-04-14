import { useEffect, useState } from 'react';

import NoteData from '../components/NoteData';

const Notes = () => {
    const [notes, setNotes] = useState(null);

    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch('/api/notes');
            const json = await response.json();

            if (response.ok) {
                setNotes(json);
            }
        };

        fetchNotes();
    }, []);

    return (
        <main className="page-shell notes-page-shell">
            <section className="notes-page-card" aria-label="All notes">
                <p className="kicker">Your web-slinging archive</p>
                <h2 className="notes-page-title">Your Notes</h2>

                <div className="notes-list">
                    {notes && notes.length > 0 ? (
                        notes.map((note) => <NoteData key={note._id} note={note} />)
                    ) : (
                        <p className="notes-empty">No notes yet.</p>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Notes;
