import { createContext, useReducer } from "react";

export const NotesContext = createContext();

const notesReducer = (state, action) => {

  switch (action.type) {

    case "CREATE_NOTE":
      return {
        ...state,
        notes: [action.payload, ...state.notes]
      };

    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter(
          (note) => note.id !== action.payload.id
        )
      };

    case "UPDATE_NOTE":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id
            ? action.payload
            : note
        )
      };

    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload
      };

    default:
      return state;
  }
};

export const NotesContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(notesReducer, {
    notes: [],
    search: ""
  });

  return (
    <NotesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
};