import { useState } from "react";
import { useNotesContext } from "../hooks/useNotesContext";

const NoteData = ({ note }) => {

    const { dispatch } = useNotesContext();

    const [isEditing, setIsEditing] = useState(false);

    const [editedTitle, setEditedTitle] = useState(note.title);

    const [editedContent, setEditedContent] = useState(note.content);

    // DELETE NOTE
    const handleDelete = () => {

        dispatch({
            type: "DELETE_NOTE",
            payload: note
        });
    };

    // UPDATE NOTE
    const handleUpdate = () => {

        const updatedNote = {
            ...note,
            title: editedTitle,
            content: editedContent
        };

        dispatch({
            type: "UPDATE_NOTE",
            payload: updatedNote
        });

        setIsEditing(false);
    };

    return (
        <div
            className="note-card"
            style={{
                border: "1px solid #ccc",
                padding: "15px",
                marginBottom: "10px",
                borderRadius: "10px"
            }}
        >

            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editedTitle}
                        onChange={(e) =>
                            setEditedTitle(e.target.value)
                        }
                        style={{
                            width: "100%",
                            marginBottom: "10px"
                        }}
                    />

                    <textarea
                        value={editedContent}
                        onChange={(e) =>
                            setEditedContent(e.target.value)
                        }
                        style={{
                            width: "100%",
                            marginBottom: "10px"
                        }}
                    />

                    <button
                        onClick={handleUpdate}
                        style={{
                            marginRight: "10px"
                        }}
                    >
                        Save
                    </button>
                </>
            ) : (
                <>
                    <h3>{note.title}</h3>

                    <p>{note.content}</p>

                    <button
                        onClick={() =>
                            setIsEditing(true)
                        }
                        style={{
                            marginRight: "10px"
                        }}
                    >
                        Edit
                    </button>
                </>
            )}

            <button
                onClick={handleDelete}
                style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}
            >
                Delete
            </button>

        </div>
    );
};

export default NoteData;