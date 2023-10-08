import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from 'react';

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)
    // this hook returns the value of WorkoutsContext object from WorkoutsContext.Provider in WorkoutContext.js

    if (!context) {
        throw Error('useWorkoutContext must be used inside a WorkoutContextProvider')
    }

    return context;
}
