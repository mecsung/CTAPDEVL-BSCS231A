import { useNotesContext } from "../hooks/useNotesContext";

const NoteData = ({ note }) => {
    const { dispatch } = useNotesContext();

    const handleDelete = async () => {
        const isConfirmed = window.confirm("Are you sure you want to delete this note?");
        if (!isConfirmed) return;
        const response = await fetch('/api/notes/' + note._id, {
            method: 'DELETE',
        });
        const data = await response.json();
        console.log(data);

        if (response.ok) {
            dispatch({ type: 'DELETE_NOTE', payload: note });
        }
    }

    const handleUpdate = async () => {
        const title = prompt("Enter new title:", note.title);
        if (title === null) return;

        const content = prompt("Enter new content:", note.content);
        if (content === null) return;

        const response = await fetch('/api/notes/' + note._id, {
        method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content })
        });
        const data = await response.json();

        if (response.ok) {
            dispatch({ type: 'UPDATE_NOTE', payload: data });
        }
    };
    return (
        <div className="note-data">
            <h2>{note.title}</h2>
            <p>{note._id}</p>
            <p>{note.content}</p>
            <span className="delete-btn" onClick={handleDelete}>Delete</span>
            <span className="update-btn" onClick={handleUpdate}>Update</span>
        </div>
    )
}
export default NoteData;