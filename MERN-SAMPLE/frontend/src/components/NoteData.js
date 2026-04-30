import { useState, useEffect } from "react";

import { useNotesContext } from "../hooks/useNotesContext";
 
 const NoteData = ({ note }) => {
    const { dispatch } = useNotesContext();
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState('');
    const [editContent, setEditContent] = useState('');

    useEffect(() => {
        if (!isEditing) return;
        setEditTitle(note.title || '');
        setEditContent(note.content || '');
    }, [isEditing, note.title, note.content]);

    const handleDelete = async () => {
        const response = await fetch(`/api/notes/${note._id}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        console.log(data);

        if (response.ok) {
            dispatch({ type: 'DELETE_NOTE', payload: data });
            window.location.reload();
        }
    }

    const handleUpdate = () => {
        setIsEditing(true);
    }

    const handleSave = async () => {
        const response = await fetch('/api/notes/' + note._id, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ title: editTitle, content: editContent })
        });

        const data = await response.json();

        if (response.ok) {
            dispatch({ type: 'UPDATE_NOTE', payload: data });
            setIsEditing(false);
        } else {
            console.error('Failed to update note', data);
        }
    }

    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditTitle(note.title || '');
        setEditContent(note.content || '');
    }

    return (
        <div className="note-data-wrapper">
            <div className="note-data">
                {isEditing ? (
                    <div className="note-edit">
                        <input
                            className="note-edit-input"
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            placeholder="Title"
                        />
                        <textarea
                            className="note-edit-textarea"
                            value={editContent}
                            onChange={(e) => setEditContent(e.target.value)}
                            rows={5}
                            placeholder="Content"
                        />
                        <div className="note-actions">
                            <button type="button" className="note-btn note-btn-update" onClick={handleSave}>Save</button>
                            <button type="button" className="note-btn note-btn-cancel" onClick={handleCancelEdit}>Cancel</button>
                        </div>
                    </div>
                ) : (
                    <>
                        <h2>{note.title}</h2>
                        <p><strong>Content: </strong>{note.content}</p>
                        <div className="note-actions">
                            <button type="button" className="note-btn note-btn-update" onClick={handleUpdate}>Update</button>
                            <button type="button" className="note-btn note-btn-delete" onClick={() => setShowDeleteModal(true)}>Delete</button>
                        </div>
                    </>
                )}
            </div>

            {showDeleteModal && (
                <div className="delete-modal-backdrop" role="presentation" onClick={() => setShowDeleteModal(false)}>
                    <div
                        className="delete-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={`delete-modal-title-${note._id}`}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <p className="delete-modal-kicker">Delete note</p>
                        <h3 id={`delete-modal-title-${note._id}`} className="delete-modal-title">
                            Are you sure you want to delete "{note.title}"?
                        </h3>
                        <div className="delete-modal-actions">
                            <button
                                type="button"
                                className="note-btn note-btn-cancel"
                                onClick={() => setShowDeleteModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="note-btn note-btn-delete"
                                onClick={handleDelete}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )

 }

 export default NoteData;