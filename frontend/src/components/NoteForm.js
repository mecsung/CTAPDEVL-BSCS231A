import { useState } from 'react';

const NoteForm = ({ onAddNote }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
 
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!title.trim() || !content.trim()) return;
 
        setLoading(true);
        setError(null);
 
        try {
            const response = await fetch('/api/notes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: title.trim(), content: content.trim() }),
            });
 
            const newNote = await response.json();
 
            if (!response.ok) {
                throw new Error(newNote.error || 'Unable to create note');
            }
 
            setContent('');
            setTitle('');
            onAddNote?.(newNote);
        } catch (err) {
            setError(err.message);
            console.error('Error saving note:', err);
        } finally {
            setLoading(false);
        }
    };
 
    return (
        <form className="note-form" onSubmit={handleSubmit}>
            <h3>Add new note</h3>
            <input
                type="text"
                placeholder="Note title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="note-input"
            />
            <textarea
                placeholder="Write your note here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="note-textarea"
                rows={4}
            />
            {error && <p className="note-error">{error}</p>}
            <button type="submit" className="btn-" disabled={loading || !title.trim() || !content.trim()}>
                {loading ? 'Saving...' : 'Add Note'}
            </button>
        </form>
    );
};
 
export default NoteForm;