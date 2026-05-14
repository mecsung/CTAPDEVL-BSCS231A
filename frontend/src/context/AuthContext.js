import { Children, createContext, useReducaer } from 'react';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type){
        case 'LOGIN':
            return { user: action.payload };
        case 'LOGOUT':
            return { user: null};
        default:
            return state;
    }
}

export const AuthContextProvider = ({ Children }) => {
    const [state, dispatch] = useReducaer(authReducer, {
        user: null
    });

    return (
        <AuthContextProvider value={{ ...state, dispatch}}>
            {Children}
        </AuthContextProvider>
    );
};