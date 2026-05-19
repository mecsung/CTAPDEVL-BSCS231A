import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (email, password) => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch('/api/user/signup', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email, password})
            })

            const json = await response.json().catch(() => null)

            if(!response.ok) {
                setError(json?.error || 'Signup failed. Please check that the server is running and try again.')
                setIsLoading(false)
                return
            }

            localStorage.setItem('user', JSON.stringify(json))

            dispatch({type: "LOGIN", payload: json})

            setIsLoading(false)
        } catch (err) {
            setError('Unable to reach the server. Please make sure the backend is running.')
            setIsLoading(false)
        }
    }

    return { signup, isLoading, error }
}
