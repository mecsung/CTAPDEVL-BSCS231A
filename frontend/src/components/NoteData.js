import { useNotesContext } from "../hooks/useNotesContext";

const NoteData = ({ note }) => {

    const HandleDelete = async () => {
        const { dispatch } = useNotesContext();
        const response = await fetch(`/api/notes/${note._id}`, {
            method: "DELETE"
        })
        const data = await response.json();
        console.log(data);

        if (response.ok) {
            dispatch({ type: 'DELETE_NOTE', payload: data });
        }

    };

    const HandleUpdate = async () => {
        const { dispatch } = useNotesContext();
        const title = prompt("Enter new title:", note.title);
        if (title === null) return;

        const content = prompt("Enter new content:", note.content);
        if (content === null) return;

        const response = await fetch(`/api/notes/${note._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, content })
        });
        const data = await response.json();
        console.log(data);

        if (response.ok) {
            dispatch({ type: 'UPDATE_NOTE', payload: data });
        }
    }

    return (
        <div className="note-data">
            <h3>{note.title}</h3>
            <p>{note._id}</p>
            <p>{note.content}</p>
            <span onClick={HandleDelete}>Delete</span>
            <span onClick={HandleUpdate}>Update</span>
        </div>
    )
}
 
export default NoteData;
 