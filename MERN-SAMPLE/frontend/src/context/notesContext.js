import { createContext, useReducer } from "react";

export const NotesContext = createContext();

export const notesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_NOTES':
            return {
                ...state,
                notes: action.payload
            }
        case 'CREATE_NOTE':
            return {
                ...state,
                notes: [action.payload, ...state.notes]
            }
        case 'DELETE_NOTE':
            // action.payload may be the deleted note object or its id
            const idToRemove = action.payload && action.payload._id ? action.payload._id : action.payload;
            return {
                ...state,
                notes: state.notes.filter(note => note._id !== idToRemove)
            }
        case 'UPDATE_NOTE':
            // Replace the matching note with the updated note payload
            return {
                ...state,
                notes: state.notes.map(n => n._id === action.payload._id ? action.payload : n)
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

export const NotesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(notesReducer, {
        notes: [],
        search: ''
    })

    return (
        <NotesContext.Provider value={{...state, dispatch}}>
            { children }
        </NotesContext.Provider>
    )
}