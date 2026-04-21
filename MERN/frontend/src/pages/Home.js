import { useEffect, useState } from "react";

import NoteData from "../components/NoteData";
import NoteForm from "../components/NoteForm";

const Home = () => {
    const [notes, setNotes] = useState(null);

    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch("/api/notes")
            const json = await response.json()

            if (response.ok) {
                setNotes(json)
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

// const Home = () => {
//     return (
//         <div className="Home">
//             <h1>Welcome to My MERN App</h1>
//             <p className="home-subtitle">
//                 A web application built for <strong>Application Development</strong> using the MERN stack.
//             </p>

//             <section className="home-section">
//                 <h2>Pages</h2>
//                 <ul>
//                     <li><strong>Home</strong> — Overview of the application</li>
//                     <li><strong>Login</strong> — User authentication page</li>
//                     <li><strong>About</strong> — Team and project information</li>
//                 </ul>
//             </section>
//         </div>
//     );
// }

export default Home;
