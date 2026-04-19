const NoteData = ({ note }) => {
    return (
      <div className="note-data">
        <h2>{note.title}</h2>
        <p>{note._id}</p>
        <p>{note.content}</p>
      </div>
    );
  };
  
  export default NoteData;