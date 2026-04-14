const Home = () => {
    <div className="notes">
        {notes && notes.map((note) => (
            <noteData key={note._id} note={note} />
        ))}
    </div>
}

const NoteData = ({note}) => {
    return (
        <div className="note-data">  
            <h2>{note.title}</h2>
            <p><strong>Content:</strong> {note.content}</p>
        </div>
    );
};

export default NoteData;

