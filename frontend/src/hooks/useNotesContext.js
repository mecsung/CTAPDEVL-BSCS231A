import { NotesContext } from "../context/NotesContext";
import { useContext } from "react";

// Custom hook to easily access notes context from any component
export const useNotesContext = () => {
    // Get the context value ({ notes, dispatch }) from NotesContext Provider
    const context = useContext(NotesContext);

    if (!context) {
        throw Error('useNotesContext must be used inside a NotesContextProvider')
    }

    // Return context so components can access notes and dispatch
    return context
}