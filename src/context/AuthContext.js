import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext(); // component that we create which has a Provider on it written below

// taking previous state and action
export const authReducer = (state, action) => {
    switch (action.type) {  // action has a type property that describes the action
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, { user: null })

    // when first load or refresh the page, do the initial check in session storage for user obj.
    // if present, update authContext state to reflect that and see the correct links in navbar

    // whn the application first loads and AuthContextProvider renders, we run useEffect once, and
    // inside we try get the user object from the session storage. If user exists, we have a value for the user
    // (obj with email and token properties), so if check will eval True, and we dispatch LOGIN action automatically.
    // if user is not in session storage, if check is False, and we dont dispatch the action
    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('user')) // parcing JSON object so we can use it in js
    
        if (user) {
            dispatch({ type: 'LOGIN', payload: user })
        }
    }, [])

    console.log('AuthContext state: ', state);  // logging state to the console to keep track of current state

    return (
        <AuthContext.Provider value ={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )

}