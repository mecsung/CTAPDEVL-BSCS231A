// Import React hooks for creating context and managing state with reducers
// createContext: Creates a global object that any component can access without prop drilling
// useReducer: Alternative to useState for complex state logic 
// (takes a reducer function and initial state)
import { createContext, useReducer } from "react";

export const NotesContext = createContext();

// state = current data BEFORE the update
// action = instruction telling HOW to update the state
const notesReducer = (state, action) => {
    // action.type = the action name (WHAT to do: SET, CREATE, DELETE)
    switch (action.type) {
        case 'SET_NOTES':
            return {
                // ...state = take everything from the current state  
                ...state, 

                // action.payload = the data (the actual notes to save)
                notes: action.payload
            }
        case 'CREATE_NOTE':
            return {
                ...state, 

                notes: [action.payload, ...state.notes]
            }
        case 'DELETE_NOTE':
            return {
                ...state, 

                // state.notes = an array of note objects currently in the state
                // filter() = creates a new array containing only the elements that pass
                // the test inside the callback
                notes: state.notes.filter((n) => n._id !== action.payload._id)
            }
        case 'SET_SEARCH':
            return {  
                ...state,
                
                search: action.payload
            }
        default:
            return state
    }
} 

// NotesContextProvider is a wrapper component that makes the notes state 
// and dispatch function available to all components inside it
export const NotesContextProvider = ({ children }) => {
    // Sets up the reducer with initial state
    const [state, dispatch] = useReducer(notesReducer, {
        // Initial state: notes is null
        notes: null,
        search: ''
    })

    return (
        // Make { notes: null/array, dispatch } available to all children
        <NotesContext.Provider value={{ ...state, dispatch }}>
            {children}
        </NotesContext.Provider>
    );
}
