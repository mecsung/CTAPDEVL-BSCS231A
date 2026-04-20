const NoteData = ({ note }) => {
    return (
        <div className="note-data">
            
            <p><strong>Content: </strong>{note.content}</p>
        </div>
    )
}

export default NoteData;