import { useState } from 'react';

// This was imported during the coding of React Context
import { useNotesContext } from '../hooks/useNotesContext';

const NoteForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(null);

    // Get the dispatch property only
    const { dispatch } = useNotesContext()

    // e = event object -> the event that just happenend
    const handleSubmit = async (e) => {
        // e.preventDefault() stops page from refreshing to prevent losing data,
        e.preventDefault();

        const note = { title, content };
        const response = await fetch('/api/notes', {
            method: 'POST',

            // stringify -> turns an object into string
            body: JSON.stringify(note),

            // headers -> extra instructions telling the server what you're sending
            // content-type: application/json -> tells the server that,
            // you're sending a json format
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();

        if (response.ok) {
            setTitle('');
            setContent('');
            console.log('New note added:', json);
            
            // dispatch was added during the coding of React Context
            dispatch({ type: 'CREATE_NOTE', payload: json })
        }
        else {
            setError(json.error);
            console.error('Failed to add note:', json);
        }
    };

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Note</h3>
            
            <label>Note Title:</label>
            
            <input
                type="text"
                value={title}

                // When someone types, grab what they typed and save it
                // e.target.value -> The text inside the input box
                onChange={(e) => setTitle(e.target.value)}
            />

            <label>Note Content:</label>

            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            <button>Add Note</button>

            {/* && is not the AND! When there's an error, show the div */}
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default NoteForm;