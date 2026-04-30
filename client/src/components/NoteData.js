import { useNotesContext } from "../hooks/useNotesContext";

const NoteData = ({ note }) => {
    const { dispatch } = useNotesContext();

    const handleDelete = async () => {
        const response = await fetch(`/api/notes/${note._id}`, {
            method: "DELETE",
        });
        const data = await response.json();

        if (response.ok) {
            dispatch({ type: "DELETE_NOTE", payload: data });
        }
    }

    const handleUpdate = async () => {
        const title = prompt("Enter new title:", note.title);
        if (title === null) return;

        const content = prompt("Enter new content:", note.content);
        if (content === null) return;

        const response = await fetch(`/api/notes/` + note._id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content })
        });

        const data = await response.json();

        if (response.ok) {
            dispatch({ type: "UPDATE_NOTE", payload: data });
        }
    }

    return (
        <div className="note-data">
            <h2>{note.title}</h2>
            <p><strong>Id:</strong> {note._id}</p>
            <p><strong>Content:</strong> {note.content}</p>
            <div className="note-data__actions">
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleUpdate}>Update</button>
            </div>
        </div>
    );
};

export default NoteData;