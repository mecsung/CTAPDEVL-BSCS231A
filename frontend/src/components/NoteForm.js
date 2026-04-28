import { useState } from "react";
import { useNotesContext } from "../hooks/useNotesContext";

const NoteForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(null);

    const { dispatch } = useNotesContext();

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
            setError(null);

            console.log('New note added:', json);

            // 🔥 THIS is what updates your UI
            dispatch({ type: 'CREATE_NOTE', payload: json });

        } else {
            console.error('Error adding note:', json.error);
            setError(json.error);
        }
    };

    return (
        <form className="create-note" onSubmit={handleSubmit}>

    <div className="spell-card">

        <div className="create-note__header">
            <p className="create-note__eyebrow">Spellcraft Entry</p>
            <h2>Inscribe a New Spell</h2>
            <p className="create-note__description">
                Write down the name and details of your spell, then add it to your spellbook.
            </p>
        </div>

        <div className="create-note__field">
            <label htmlFor="note-title">Spell Name</label>
            <input
                id="note-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>

        <div className="create-note__field">
            <label htmlFor="note-content">Spell Description</label>
            <textarea
                id="note-content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
        </div>

        <div className="create-note__actions">
            <button type="submit">Add to Spellbook</button>
        </div>

        {error && <div className="create-note__error">{error}</div>}

    </div>

</form>
    );
};

export default NoteForm;