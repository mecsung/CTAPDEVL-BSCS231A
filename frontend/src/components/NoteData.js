import { useState } from 'react';
import { useNotesContext } from '../hooks/useNotesContext';

const NoteData = ({ note }) => {
  const { dispatch } = useNotesContext();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title || '');
  const [content, setContent] = useState(note.content || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (!note) return null;

  const noteId = note._id || note.id;

  const handleDelete = async () => {
    if (!noteId) return;

    const response = await fetch(`/api/notes/${noteId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      dispatch({ type: 'DELETE_NOTE', payload: noteId });
    } else {
      console.error('Failed to delete note');
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    if (!noteId) return;
    if (!title.trim() || !content.trim()) {
      setError('Title and content cannot be empty');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/notes/${noteId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title.trim(), content: content.trim() }),
      });

      const updatedNote = await response.json();

      if (!response.ok) {
        throw new Error(updatedNote.error || 'Unable to update note');
      }

      dispatch({ type: 'UPDATE_NOTE', payload: updatedNote });
      setIsEditing(false);
    } catch (err) {
      setError(err.message);
      console.error('Failed to update note:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="note-card">
      <div className="note-card-header">
        {isEditing ? (
          <input
            className="note-input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h4>{note.title || 'Untitled Note'}</h4>
        )}
        <div className="note-card-actions">
          {isEditing ? (
            <>
              <button
                type="button"
                className="note-save-btn"
                onClick={handleUpdate}
                disabled={loading || !title.trim() || !content.trim()}
              >
                {loading ? 'Saving...' : 'Save'}
              </button>
              <button
                type="button"
                className="note-cancel-btn"
                onClick={() => {
                  setIsEditing(false);
                  setTitle(note.title || '');
                  setContent(note.content || '');
                  setError(null);
                }}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="note-edit-btn"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
              <button type="button" className="note-delete-btn" onClick={handleDelete}>
                Delete
              </button>
            </>
          )}
        </div>
      </div>

      {isEditing ? (
        <>
          <textarea
            className="note-textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
          />
          {error && <p className="note-error">{error}</p>}
        </>
      ) : (
        <p>{note.content || 'No additional details.'}</p>
      )}

      {note.createdAt && <small>{new Date(note.createdAt).toLocaleString()}</small>}
    </div>
  );
};

export default NoteData;
