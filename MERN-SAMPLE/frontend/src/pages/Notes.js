import { useEffect } from 'react';
import { useNotesContext } from '../hooks/useNotesContext';
import { useAuthContext } from '../hooks/useAuthContext';

import NoteData from '../components/NoteData';
import SearchNote from '../components/NoteSearch';

const Notes = () => {
    const { notes, dispatch, search } = useNotesContext();
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchNotes = async () => {
            if (!user) {
                return;
            }

            const response = await fetch('/api/notes', {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            });
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_NOTES', payload: json });
            }
        };

        fetchNotes();

    }, [dispatch, user]);

    const searchText = (search || '').toLowerCase();

    const filteredNotes = notes && notes.filter((note) => {
        const title = (note.title || '').toLowerCase();
        const content = (note.content || '').toLowerCase();

        return title.includes(searchText) || content.includes(searchText);
    });

    return (
        <main className="page-shell notes-page-shell">
            <section className="notes-page-card" aria-label="All notes">
                <div className="notes-card-header">
                    <div>
                        <p className="kicker">Your web-slinging archive</p>
                        <h2 className="notes-page-title">Your Notes</h2>
                    </div>

                    <SearchNote />
                </div>

                <div className="notes-list">
                    {filteredNotes && filteredNotes.length > 0 ? (
                        filteredNotes.map((note) => <NoteData key={note._id} note={note} />)
                    ) : (
                        <p className="notes-empty">No matching notes found.</p>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Notes;
