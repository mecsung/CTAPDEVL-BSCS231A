import { useState } from 'react';
import { useNotesContext } from '../hooks/useNotesContext';
 
const NoteForm = () => {
  const { dispatch } = useNotesContext();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error] = useState(null);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    // Handle form submission logic here
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
            setTitle("");
            setContent("");
            dispatch({ type: 'CREATE_NOTE', payload: json });
        } else {
            console.error('Error adding note:', json);
        }
    };
 
  return (
    <form className='form-create' onSubmit={handleSubmit}>
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
 
      <button>Add Note</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}
 
export default NoteForm;