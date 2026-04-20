import { createContext, useReducer } from "react";

// Create context
export const NotesContext = createContext();

// Reducer
export const notesReducer = (state, action) => {
  switch (action.type) {
    case "SET_NOTES":
      return {
        notes: action.payload,
      };
    case "CREATE_NOTE":
      return {
        notes: [action.payload, ...(state.notes || [])],
      };
    default:
      return state;
  }
};

// Provider
export const NotesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, {
    notes: null,
  });

  return (
    <NotesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
};
// done na sya