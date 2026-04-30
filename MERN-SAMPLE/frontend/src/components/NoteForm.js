import { useState, useEffect } from 'react';
import { useNotesContext } from "../hooks/useNotesContext";

const NoteForm = () => {
    const {dispatch } = useNotesContext()
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                setSuccess(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [success]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        const note = { title, content };
        const response = await fetch('/api/notes', {
            method: 'POST',
            body: JSON.stringify(note),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();

        if (response.ok) {
            setTitle('');
            setContent('');
            dispatch({ type: 'CREATE_NOTE', payload: json })
            setSuccess('Note added successfully.');
            console.log('New note added:', json);
        } else {
            setError(json.error || 'Failed to add note.');
            console.error('Error adding note:', json);
        }
    };

    return(
        <main className="page-shell note-form-page">
            <section className="note-form-card" aria-label="Create note">
                <p className="kicker">Create your next web-slinging idea</p>
                <h2 className="note-form-title">Add New Note</h2>

                <form className='note-form' onSubmit={handleSubmit}>
                    <label htmlFor="note-title">Note Title</label>
                    <input
                        id="note-title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <label htmlFor="note-content">Note Content</label>
                    <textarea
                        id="note-content"
                        rows="7"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />

                    <button type="submit" className="btn-primary">Add Note</button>

                    {error && <p className="form-message form-error">{error}</p>}
                </form>
            </section>

            {success && (
                <div className="success-modal-backdrop" role="presentation" onClick={() => setSuccess(null)}>
                    <div
                        className="success-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="success-modal-title"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <h3 id="success-modal-title" className="success-modal-title">
                            {success}
                        </h3>
                        <button
                            type="button"
                            className="note-btn note-btn-primary"
                            onClick={() => setSuccess(null)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </main>
    )
}

export default NoteForm;