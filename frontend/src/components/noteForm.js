import { useState } from "react";
import { useNoteContext } from "../hooks/useNoteContext";

const NoteForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState(null);

    const { dispatch } = useNoteContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const note = { title, content };

        const response = await fetch("/api/notes", {
            method: "POST",
            body: JSON.stringify(note),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();

        if (response.ok) {
            setTitle("");
            setContent("");
            dispatch({ type: "CREATE_NOTE", payload: json });
        } else {
            console.error('Error creating note:', json.error);
            setError(json.error);
        }
    };

    return (
        <form className="create-note" onSubmit={handleSubmit}>
            <div className="create-note_header">
                <p className="create-note_eyebrow">Quick Capture</p>
                <h2>Create a New Note</h2>
                <p className="create-note_description">Whats on your mind?</p>
            </div>

            <div className="create-note_field">
                <label htmlFor="note-title">Note Title:</label>
                <input
                    id="note-title"
                    type="text"
                    placeholder="Untitled Note"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="create-note_field">
                <label htmlFor="note-content">Note Content:</label>
                <textarea
                    id="note-content"
                    placeholder="Thoughts dump here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>

            <div className="create-note_actions">
                <button type="submit">SUBMIT NOTE</button>
            </div>

            {error && <div className="create-note_error">{error}</div>}
        </form>
    );
};

export default NoteForm;