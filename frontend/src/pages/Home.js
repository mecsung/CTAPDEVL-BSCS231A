import { useEffect, useState } from "react";
import { useNotesContext } from "../hooks/useNotesContext";

import NoteData from "../components/NoteData";
import NoteForm from "../components/NoteForm";

const Home = () => {
    const { dispatch, notes } = useNotesContext();
    // const [notes, setNotes] = useState(null);
    

    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch("/api/notes")
            const json = await response.json()

            if (response.ok) {
                // setNotes(json)
                dispatchEvent({ type: 'SET_NOTES', paylaod: json })
            }
        }
        fetchNotes()
    },[]);

    return (
        <div className="home">
            <NoteForm />
            <h1>What's up!</h1>

            <div className="notes">
            {notes && notes.map((note) => (
                <NoteData key={note._id} note={note} />
            ))}
            </div>
        </div>
    )

}

export default Home;

// const Home = () => {
//     return (
//         <div className="login">
//             <h1>Home Page</h1>
//             <form>
//                 <label htmlFor="username">Username:</label>
//                 <input type="text" placaholder="Username" />
//                 <label htmlFor="password">Password:</label>
//                 <input type="password" placaholder="Password" />
//                 <button type="submit">Home</button>
//             </form>
//          </div>
//     );
// }