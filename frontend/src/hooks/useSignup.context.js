import { useState } from "react";
import { useAuthContext } from "./useAuthContext.context";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [loading, setIsLoading] = useState(null);

    const {dispatch} = useAuthContext();

    const signup = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const respone = await fetch('/api/user/signup', {
            method: "POST",
            headers: { 'Content Type' : 'application/json'},
            body: JSON.stringify({email, password})
        })

        const json = await response.json()
    }
}