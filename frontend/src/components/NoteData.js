import '../css/home.css';

const NoteData = ({ note }) => {
    return (
        <div className="note-data"> 
            <h2>{note.title}</h2>
            <p>{note._id || note.id}</p>
            <p><strong>{note.content}</strong></p>
        </div>
    );
}

export default NoteData;