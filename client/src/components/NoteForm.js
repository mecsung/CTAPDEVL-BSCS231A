import { useState } from "react";
import { useNotesContext } from "../hooks/useNotesContext";

const NoteForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
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
            console.log('New note added:', json);
        } else {
            console.error('Error adding note:', json.error);
            setError(json.error);
        }
    };

    return (
        <form className="create-note" onSubmit={handleSubmit}>
            <div className="create-note__header">
                <p className="create-note__eyebrow">Quick Capture</p>
                <h2>Create a New Note</h2>
                <p className="create-note__description">
                    Jot down a title and a short note, then save it to your board.
                </p>
            </div>

            <div className="create-note__field">
                <label htmlFor="note-title">Note Title</label>
                <input
                    id="note-title"
                    type="text"
                    placeholder="Give your note a title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="create-note__field">
                <label htmlFor="note-content">Note Content</label>
                <textarea
                    id="note-content"
                    placeholder="Write the details here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>

            <div className="create-note__actions">
                <button type="submit">Submit Note</button>
            </div>

            {error && <div className="create-note__error">{error}</div>}
        </form>
    );

}
export default NoteForm;