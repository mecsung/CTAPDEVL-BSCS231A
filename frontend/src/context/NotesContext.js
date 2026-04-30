import { createContext, useReducer } from "react";

export const NotesContext = createContext();

export const NotesContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(notesReducer, {
        notes: null,
        search: ''
    })

    return (
        <NotesContext.Provider value={{...state, dispatch}}>
                {children}
        </NotesContext.Provider>
    )
}

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
                    notes: state.notes.filter((note) => note._id !== action.payload._id)
                }
            case 'UPDATE_NOTE':
                return {
                    ...state,
                    notes: state.notes.map((note) => note._id === action.payload._id ? action.payload : note)
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

