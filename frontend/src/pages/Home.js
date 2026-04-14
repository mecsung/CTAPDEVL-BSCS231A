import { useEffect, useState } from "react";

import NoteData from "../components/NoteData";
import NoteForm from "../components/NoteForm";

const Home = () => {
  const [notes, setNotes] = useState(null)

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch("/api/notes")
      const json = await response.json() //its okay to be json for the server side

      if (response.ok) { 
        setNotes(json) //to parce it for the client side
      }
    }

    fetchNotes()
  }, []) //display regardless none

    return (
        <div className = "home">
            <NoteForm />
            <h1>LEZZZ GOOO!!!</h1>
            <h2>Welcome to the Home Page</h2>
            <h3>:3</h3>

            {/* <button>Click Me</button> */}

            <div className="notes">
              {notes && notes.map((note) => (
                //call the NoteData component and pass the note as
                <NoteData key={note._id} note={note} /> //{note} came from the NoteData
            //     <p key={note._id}>
            //         {note.title} 
            //         <br/> 
            //         {note.content}</p> //key yung magseset ng bagong loop
              ))}
            </div>
        </div>
    );
}


export default Home;