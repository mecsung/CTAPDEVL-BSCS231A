const NoteData = ({ note }) => {
  if (!note) return null;

  return (
    <div className="note-card">
      <h4>{note.title || 'Untitled Note'}</h4>
      <p>{note.content || 'No additional details.'}</p>
      {note.createdAt && <small>{new Date(note.createdAt).toLocaleString()}</small>}
    </div>
  );
};

export default NoteData;
