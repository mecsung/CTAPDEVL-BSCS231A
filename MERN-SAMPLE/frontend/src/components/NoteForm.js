import { useState } from 'react';

const NoteForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

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
            console.error('Error adding note:', json);
        }
    };

    return(
        <main className="page-shell note-form-page">
            <section className="note-form-card" aria-label="Create note">
                <p className="kicker">Create your next web-slinging idea</p>
                <h2 className="note-form-title">Add New Note</h2>

                <form className='note-form' onSubmit={handleSubmit}>
                    <label htmlFor="note-title">Note Title</label>
                    <input
                        id="note-title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <label htmlFor="note-content">Note Content</label>
                    <textarea
                        id="note-content"
                        rows="7"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />

                    <button type="submit" className="btn-primary">Add Note</button>
                </form>
            </section>
        </main>
    )
}

export default NoteForm;