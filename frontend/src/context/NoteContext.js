import { createContext, useReducer } from "react";

export const NoteContext = createContext();

export const notesReducer = (state, action) => {
    switch (action.type) {
        case "SET_NOTES":
            return {
                notes: action.payload
            };

        case "CREATE_NOTE":
            return {
                notes: [action.payload, ...state.notes]
            };

        default:
            return state;
    }
};

const NotesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(notesReducer, {
        notes: null
    });

    return (
        <NoteContext.Provider value={{ ...state, dispatch }}>
            {children}
        </NoteContext.Provider>
    );
};

export default NotesContextProvider;