import { useState } from 'react';
import { useNotesContext } from "../context/useNotesContext";

const NoteForm = () => {
    const { dispatch } = useNotesContext(); // Using context!
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!title.trim() || !content.trim()) return;

        setLoading(true);
        setError(null);

        const note = { title: title.trim(), content: content.trim() };

        try {
            const response = await fetch('/api/notes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(note),
            });

            const json = await response.json(); // Parse the response once

            if (!response.ok) {
                // If backend validation fails, use the error message from server
                setError(json.error || 'Unable to create note');
            } else {
                // SUCCESS:
                setError(null);
                setTitle('');
                setContent('');
                
                // Update the global state so the UI refreshes instantly
                dispatch({ type: 'CREATE_NOTE', payload: json });
            }
        } catch (err) {
            setError("Could not connect to the server.");
            console.error('Error saving note:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Note</h3>

            <label>Note Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Content:</label>
            <textarea
                onChange={(e) => setContent(e.target.value)}
                value={content}
                rows={4}
            />

            <button disabled={loading}>
                {loading ? 'Adding...' : 'Add Note'}
            </button>
            
            {error && <div className="error">{error}</div>}
        </form>
    );
};

export default NoteForm;