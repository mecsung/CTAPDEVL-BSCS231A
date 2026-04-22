import { useState } from "react";
import { useNotesContext } from "../hooks/useNotesContext";
const NoteForm = () => {
    const { dispatch } = useNotesContext();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState(null);
    const handleSubmit = async (e) => {
        if (response.ok) {
            setTitle("");
            setContent("");
            dispatch({ type: 'CREATE_NOTE', payload: json })
        }
    }
}