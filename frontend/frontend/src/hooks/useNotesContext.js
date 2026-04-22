import { useContext } from "react";
import { NotesContext } from "../context/noteContext";

export const useNotesContext = () => {
  const context = useContext(NotesContext);

  if (!context) {
    throw Error("useNotesContext must be used inside a NotesProvider");
  }

  return context;
};
