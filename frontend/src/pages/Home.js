//#region 1

// The () is the parameter list of the function, in this case it is empty because 
// the Home component does not take any props
// The => is the arrow function syntax, it is a shorter way to write a function expression
/* 
const Home = () => {
    return (
        <div className="home">
            <h1>Home Page</h1>
        </div>
    );
} 
*/

//#endregion

//#region 2

// useState -> save/change data
// useEffect -> do things after page loads
import { useEffect, useState } from 'react';

/*

// This is just a template!
// count -> current value
// setCount -> function to change count
// userState(0) -> starts at 0
const [count, setCount] = useState(0);

// useEffects -> runs after render
// useEffect takes a function as the first argument and an array of dependencies, 
// as the second argument
useEffect(() => {
    // Show current count
    console.log(`Component mounted or count changed. Current count: ${count}`);

    // [count] -> rerun when count changes
    // When the array of dependencies is empty, useEffect will only run once!
}, [count]);

// Example: setCount(2) -> Component mounted or count changed. Current count: 2

*/

//#endregion

//#region 3

// This was imported during the coding of React Context
import { useNotesContext } from '../hooks/useNotesContext';

import NoteData from '../components/NoteData';
import NoteForm from '../components/NoteForm';
import SearchNote from '../components/SearchNote';

const Home = () => {

    /*
    // We will not use useState because of React Context (dispatch)
    // We will instead use notes and dispatch 
    // useState(null) because we don't have any notes to display yet, 
    // we will fetch them from the server
    const [notes, setNotes] = useState(null)
    */

    const { notes, dispatch, search } = useNotesContext();

    useEffect(() => {
        const fetchNotes = async () => {
            // fetch request information to http://localhost:4000/api/notes
            const response = await fetch('/api/notes')
            const json = await response.json()

            if (response.ok) {
                /*
                // We will have to comment the setNotes because of React Context
                setNotes(json)
                */

                dispatch({ type: 'SET_NOTES', payload: json })
            }
        }
        
        fetchNotes()

        // The [] means run this effect only once when the components first loads
        // We turned it into comment because of React Context
    },/* [] */);

    // Filter for searching
    const filteredNotes = notes && notes.filter((note) =>
        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.content.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="home">
            <h1>Home Page</h1>

            <NoteForm />

            <SearchNote />

            <div className="notes">
                
                {/* && is not the AND! When there's a note, 
                map the array and render each note */}
                {/* notes && notes.map((note) => (
                    
                    {/* Render each note by passing it as a prop to the NoteData component*/}
                    {/* <NoteData key={note._id} note={note}/> 
                ))} */}

                {filteredNotes && filteredNotes.map((note) => (
                    <NoteData key={note._id} note={note} />
                ))} 
            </div>
        </div>   
    );
}

//#endregion

export default Home;