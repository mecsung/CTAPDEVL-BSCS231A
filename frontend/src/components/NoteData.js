import { useNotesContext } from '../context/NotesContext';

const NoteData = ({ note }) => {
    const { notes, dispatch } = useNotesContext();

    const handleDelete = async () => {

        const confirmDelete = window.confirm(
            "⚠️ Are you sure you want to delete this note?"
        );

        if (!confirmDelete) return;

        const response = await fetch(`/api/notes/${note._id}`, {
            method: 'DELETE'
        });

        const data = await response.json();
        console.log(data);

        if (response.ok) {
            dispatch({ type: 'DELETE_NOTE', payload: data });
        }
    };

    const handleUpdate = async () => {
        const title = prompt('Enter new title:', note.title);
        if (title === null) return; // User cancelled the prompt

        const content = prompt('Enter new content:', note.content);
        if (content === null) return; // User cancelled the prompt

        const response = await fetch(`/api/notes/${note._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content })
        });

        const data = await response.json();
        // console.log(data);

        if (response.ok) {
            dispatch({ type: 'UPDATE_NOTE', payload: data });
        }
    };

    return (
        <div className="note-data">
            <h3>{note.title}</h3>
            <p>{note._id}</p>
            <p>{note.content}</p>
            <div className="note-actions">
                <span className="btn btn-delete" onClick={handleDelete}>Delete</span>
                <span className="btn btn-update" onClick={handleUpdate}>Update</span>
            </div>
        </div>
    );
}


export default NoteData;