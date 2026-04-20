const NoteData = ({ note }) => {
    return (
        <div className="note-data">
            <h3>{note.title}</h3>
            <p>{note._id}</p>
            <p><strong>Content: </strong>{note.content}</p>
        </div>
    )
}

export default NoteData;