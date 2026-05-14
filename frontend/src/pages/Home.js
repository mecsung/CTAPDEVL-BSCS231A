import { useState } from "react";

import { useNotesContext } from "../hooks/useNotesContext";

import NoteData from "../components/NoteData";

import SearchNote from "../components/SearchNote";

function Home() {

  const { notes, dispatch, search } =
    useNotesContext();

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  // CREATE NOTE
  const handleAddNote = () => {

    if (!title.trim() || !content.trim()) {
      return;
    }

    const newNote = {
      id: Date.now(),
      title,
      content
    };

    dispatch({
      type: "CREATE_NOTE",
      payload: newNote
    });

    setTitle("");

    setContent("");
  };

  // SEARCH FILTER
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(
      search.toLowerCase()
    ) ||
    note.content.toLowerCase().includes(
      search.toLowerCase()
    )
  );

  return (
    <div
      className="container"
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "20px"
      }}
    >

      <h1>Notes App</h1>

      {/* ADD NOTE FORM */}

      <div
        className="note-form"
        style={{
          marginBottom: "20px"
        }}
      >

        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px"
          }}
        />

        <textarea
          placeholder="Note Content"
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px"
          }}
        />

        <button
          onClick={handleAddNote}
          style={{
            padding: "10px 20px",
            cursor: "pointer"
          }}
        >
          Add Note
        </button>

      </div>

      {/* SEARCH */}

      <SearchNote />

      {/* NOTES */}

      <div className="notes-list">

        {filteredNotes.length === 0 ? (
          <p>No notes found...</p>
        ) : (
          filteredNotes.map((note) => (
            <NoteData
              key={note.id}
              note={note}
            />
          ))
        )}

      </div>

    </div>
  );
}

export default Home;