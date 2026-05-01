import { createContext, useReducer, useContext } from "react";

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
            return {
                ...state,
                notes: state.notes.filter((n) => n._id !== action.payload._id)
            }
        case 'UPDATE_NOTE':
            return {
                ...state,
                notes: state.notes.map((n) => n._id === action.payload.note._id ? action.payload.note : n)
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



// const NotesContext = createContext();

export const NotesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(notesReducer, {
        notes: [],
        search: ''
    });

    return (
        <NotesContext.Provider value={{...state, dispatch}}>
            { children }
        </NotesContext.Provider>
    );
};

export const useNotesContext = () => {
    const context = useContext(NotesContext);

    if (!context) {
        throw new Error(
            "useNotesContext must be used inside a NotesContextProvider"
        );
    }

    return context;
};