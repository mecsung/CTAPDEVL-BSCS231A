const NoteData = ({ note }) => {
    return (
        <div className="note-data">
            <h3>{note.title}</h3>
            <p>{note._id}</p>
            <p>{note.content}</p>
        </div>
    )
}
 
export default NoteData;
 