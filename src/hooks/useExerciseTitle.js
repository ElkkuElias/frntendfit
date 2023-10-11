import { useState } from "react";

function useExerciseTitle(initialValue = "") {
    const [excerciseTitle, setexcerciseTitle] = useState(initialValue);

    const handlexcerciseTitleChange = (newTitle) => {
        setexcerciseTitle(newTitle);
    };

    const resetExerciseTitle = () => {
        setexcerciseTitle("");
    };

    return {
        excerciseTitle,
        handlexcerciseTitleChange,
        resetExerciseTitle,
    };
}

export default useExerciseTitle;