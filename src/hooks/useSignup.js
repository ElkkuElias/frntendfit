import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
// import { REACT_APP_API_URL } from '../utils/apiConfig';

// const apiUrl = `${REACT_APP_API_URL}/api/signup`;

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('https://fitnessappserver.onrender.com/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
            console.log("Signup failed:", json);
        }
        if (response.ok) {
            sessionStorage.setItem('user', JSON.stringify(json))
            console.log("Signup successful!", json);

            // update the auth context
            dispatch({ type: 'LOGIN', payload: json })

            // update loading state
            setIsLoading(false)
        }
    }

    return { signup, isLoading, error }
}
