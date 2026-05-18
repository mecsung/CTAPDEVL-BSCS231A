import { useNavigate } from "react-router-dom";

import { useEffect } from 'react';
import { useNotesContext } from '../hooks/useNotesContext';
import { useAuthContext } from '../hooks/useAuthContext';

const Home = () => {
    const navigate = useNavigate()

    const { dispatch } = useNotesContext()
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchNotes = async () => {
            if (!user) {
                return;
            }

            try {
                const response = await fetch('/api/notes', {
                    headers: {
                        Authorization: `Bearer ${user.token}`
                    }
                });
                const json = await response.json();

                if (response.ok) {
                    dispatch({ type: 'SET_NOTES', payload: json});
                }
            } catch (error) {
                console.error('Failed to fetch notes:', error);
            }
        }
        fetchNotes()

    }, [dispatch, user]);

    return (
        <main className="page-shell home-page">
            <section className="hero">
                <p className="kicker">Your friendly neighborhood notes system</p>
                <h2>With great notes comes great productivity</h2>
                <p>
                    Spidey Notes keeps your ideas secure, organized, and ready for action.
                    Track class reminders, project tasks, and sudden genius moments in one place.
                </p>
                <div className="hero-actions">
                    <button
                        type="button"
                        className="btn-primary"
                        onClick={() => navigate("/create-note")}
                    >
                        Create A Note
                    </button>
                    <button
                        type="button"
                        className="btn-secondary"
                        onClick={() => navigate("/notes")}
                    >
                        View Notes
                    </button>
                </div>
            </section>

            <section className="feature-grid" aria-label="Highlights">
                <article className="feature-card">
                    <h3>Fast Capture</h3>
                    <p>Drop notes in seconds during lectures or while coding.</p>
                </article>
                <article className="feature-card">
                    <h3>Smart Tags</h3>
                    <p>Sort by course, deadline, or priority to find notes instantly.</p>
                </article>
                <article className="feature-card">
                    <h3>Daily Focus</h3>
                    <p>Pin your top tasks and swing through your day with clarity.</p>
                </article>
            </section>
        </main>
    );

    
}

export default Home;