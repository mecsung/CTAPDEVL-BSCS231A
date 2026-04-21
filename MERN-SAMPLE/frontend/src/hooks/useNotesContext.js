import { NotesContext } from "../context/notesContext";
import { use, useContext } from "react";

export const useNotesContext = () => {
    const context = useContext(NotesContext)

    if (!context) {
        throw Error ('useNotesContext must be inside a NotesContextProvider')
    }

    return context

}