import { createContext } from "react";

const NotesContext = createContext();

export const NotesContextProvider = ({children}) => {
    return (
        <NotesContextProvider>
            {children}
        </NotesContextProvider>
    )
}