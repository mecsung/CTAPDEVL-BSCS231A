import { useEffect } from "react";
import { useNotesContext } from '../context/useNotesContext';

// Components
import NoteData from "../components/NoteData";
import NoteForm from "../components/NoteForm";

const Home = () => {
    // 1. Properly destructure the context (check if your hook returns an array or object)
    // Assuming it returns { notes, dispatch }
    const { notes, dispatch } = useNotesContext();

    // 2. Define the missing state for count
    const [count, setCount] = useState(0);

    // This effect tracks 'count' updates
    useEffect(() => {
        console.log("Count updated:", count);
    }, [count]);

    // Fetch notes on mount
    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await fetch("/api/notes");
                const json = await response.json();

                if (response.ok) {
                    dispatch({ type: 'SET_NOTES', payload: json });
                }
            } catch (error) {
                console.error("Failed to fetch notes:", error);
            }
        };

        fetchNotes();
    }, [dispatch]); // Added dispatch as a dependency

    return (
        <div className="home">
            <div className="main-content">
                <h1>What's up homie</h1>
                
                {/* Counter Section */}
                <div className="counter-test">
                    <p>Count: {count}</p>
                    <button onClick={() => setCount(count + 1)}>Click me</button>
                </div>

                <div className="notes"> 
                    {notes && notes.map((note) => (
                        <NoteData key={note._id} note={note} />
                    ))}
                </div>
            </div>

            {/* Usually, you'd want the form visible to add notes */}
            <NoteForm />
        </div>
    );
};

export default Home;