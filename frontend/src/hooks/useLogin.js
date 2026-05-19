import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch('/api/user/login', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email, password})
            })

            const json = await response.json().catch(() => null)

            if(!response.ok) {
                setError(json?.error || 'Login failed. Please check that the server is running and try again.')
                setIsLoading(false)
                return
            }

            // save user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update auth context
            dispatch({type: "LOGIN", payload: json})

            setIsLoading(false)
        } catch (err) {
            setError('Unable to reach the server. Please make sure the backend is running.')
            setIsLoading(false)
        }
    }

    return { login, isLoading, error }
}
