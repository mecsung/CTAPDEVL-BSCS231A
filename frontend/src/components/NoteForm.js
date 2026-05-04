import { useState } from "react";
import { useNotesContext } from "../hooks/useNotesContext";

const NoteForm = () => {
    const { dispatch } = useNotesContext();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const note = { title, content };

        try {
            const response = await fetch('http://localhost:4000/api/notes', {
                method: 'POST',
                body: JSON.stringify(note),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const json = await response.json();

            if (!response.ok) {
                setError(json.error || "Something went wrong");
                return;
            }

            setTitle('');
            setContent('');
            setError(null);

            dispatch({ type: 'CREATE_NOTE', payload: json });

        } catch (err) {
            setError("Network error: backend not reachable");
            console.log(err);
        }
    };

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add New Note</h3>

            <label>Note Title:</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <label>Note Content:</label>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            <button>Add note</button>

            {error && <div className="error">{error}</div>}
        </form>
    );
};

export default NoteForm;