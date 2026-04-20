export function NoteData({ notes }) {
  return (
    <div className="list-wrapper">
      <h2 className="list-header">My Notes</h2>
      {notes ? (
        <ul className="note-list">
          {notes.map((note) => (
            <li key={note._id}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No notes available.</p>
      )}
    </div>
  );
}
