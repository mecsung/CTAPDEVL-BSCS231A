import { useState } from "react";
import "./noteForm.css";
import { useNotesContext } from "../hooks/useNotesContext";

const NoteForm = () => {
    const { dispatch } = useNotesContext();
    const [ title, setTitle ] = useState("");
    const [ content, setContent ] = useState("");
    const [ error, setError ] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const note = { title, content };
        const response = await fetch("/api/notes", {
            method: "POST",
            body: JSON.stringify(note),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const json = await response.json();

        if (response.ok) { 
            setTitle("");
            setContent("");
            dispatch({ type: "CREATE_NOTE", payload: json });
        } else {
            setError(json.error);
            console.error('Error adding note:', json);
        }
    };

    return (
        <form className="note-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Note Title</label>
                <input 
                    type="text"
                    placeholder="Enter title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                />
            </div>
            
            <div className="form-group">
                <label>Note Content</label>
                <textarea 
                    placeholder="Write your thoughts..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            
            <button className="btn-primary" type="submit">Add Note</button>
            
            {error && <div className="error-message">{error}</div>}
        </form>
    )
}

export default NoteForm;