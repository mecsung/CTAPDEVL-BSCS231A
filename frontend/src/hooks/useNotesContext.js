import { NoteContext } from "../context/NoteContext";
import { use, useContext } from "react";

export const useNotesContext = () => {
    const context = useContext(NoteContext)

    if (!context) {
        throw Error("useNotesContext must be used inside a NotesContextProvider");
    }

    return context;
};