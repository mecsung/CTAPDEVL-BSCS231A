import { useState } from "react";

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
            placeholder="e.g. Lumos Maxima"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
    </div>

    <div className="create-note__field">
        <label htmlFor="note-content">Spell Description</label>
        <textarea
            id="note-content"
            placeholder="Describe what the spell does..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
        />
    </div>

    <div className="create-note__actions">
        <button type="submit">Add to Spellbook</button>
    </div>

    {error && <div className="create-note__error">{error}</div>}
</form>
    );

}
export default NoteForm;