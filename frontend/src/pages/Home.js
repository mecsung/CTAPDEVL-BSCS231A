import { useEffect, useState } from "react"; // Removed unused 'use'
import NoteData from "../components/NoteData";

const Home = () => {
    // 1. Move Hooks inside the component
    const [count, setCount] = useState(0);
    const [notes, setNotes] = useState(null);

    // This effect now correctly tracks 'count' within the component scope
    useEffect(() => {
        console.log("Component mounted or count updated:", count);
    }, [count]);

    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch("/api/notes");
            const json = await response.json();

            if (response.ok) {
                setNotes(json);
            }
        };
        fetchNotes();
    }, []);

    return (
        <div className="home">
            <h1>Whatss up homie</h1>
            
            {/* 2. Added onClick so 'count' and 'setCount' are used */}
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>

            <div className="notes"> 
                {notes && notes.map((note) => (
                    /* 3. Using NoteData component instead of raw <p> tags */
                    <NoteData key={note._id} note={note} />
                ))}
            </div>
        </div>
    );
};

export default Home;