import { createContext, useReducer } from "react";

// create context
export const NotesContext = createContext();

// reducer
export const NotesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_NOTES':
            return {
                notes: action.payload
            };
        case 'CREATE_NOTE':
            return {
                notes: [action.payload, ...state.notes]
            };
        default:
            return state;
    }
};

// provider
export const NotesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(NotesReducer, {
        notes: null
    });

    return (
        <NotesContext.Provider value={{ ...state, dispatch }}>
            {children}
        </NotesContext.Provider>
    );
};