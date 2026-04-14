import { useState } from "react";

const NoteForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState(null);

const handleSubmit = async (e) => {
    e.preventDefault();

    const note = { title, content };

    const response = await fetch("/api/notes", {
        method: "POST",
        body: JSON.stringify(note),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const json = await response.json();

    if (response.ok){
        setTitle("");
        setContent("");
    }
    else{
        console.log(json.error);
        setError(json.error);
    }
}

    return(
        <form className="form-create" onSubmit={handleSubmit}>
            <h3>Create a New Note</h3>
            <label>Note Title</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label>Note Content:</label>
            <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button>Add New Note</button>
        </form>
    )
}

export default NoteForm;