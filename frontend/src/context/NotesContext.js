import { createContext, useReducer } from "react";
 
// Create and export the context
export const NotesContext = createContext();
 
export const notesReducer = (state, action) => {
  switch (action.type) {
    case "SET_NOTES":
      return { notes: action.payload };
    case "CREATE_NOTE":
      return { notes: [action.payload, ...(state.notes || [])] };
    case "UPDATE_NOTE": {
      const targetId = action.payload._id ?? action.payload.id;
      return {
        notes: state.notes?.map((note) => {
          const noteId = note._id ?? note.id;
          return noteId === targetId ? action.payload : note;
        }) || [],
      };
    }
    case "DELETE_NOTE": {
      const targetId = action.payload;
      return {
        notes: state.notes?.filter((note) => {
          const noteId = note._id ?? note.id;
          return noteId !== targetId;
        }) || [],
      };
    }
    default:
      return state;
  }
};
 
export const NotesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, { notes: [] });
 
  return (
    <NotesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
};