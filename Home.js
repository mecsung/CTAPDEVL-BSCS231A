import { useEffect } from 'react'; 
import { useNotesContext } from '../hooks/useNotesContext';

import NoteData from '../components/NoteData';
import NoteForm from '../components/NoteForm';

const Home = () => {
    const { state: { notes }, dispatch } = useNotesContext(); 

    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch('/api/notes') 
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_NOTES', payload: json })
            }
        }

        fetchNotes();
    }, [dispatch]);  

    return (
        <div className="home">
            <h1>Welcome to Notes App</h1>
            <NoteForm />

            <div className="notes">
                {notes && notes.map((note) => (
                    <NoteData key={note._id} note={note} />
                ))}
            </div>
        </div>
    )
}

export default Home;