import React, { useState } from 'react';
import ExerciseList from './ExerciseList';

const ParentComponent = () => {
  const [isExerciseListVisible, setIsExerciseListVisible] = useState(true);

  const handleHideExerciseList = () => {
    setIsExerciseListVisible(false);
  };

  return (
    <>
      {isExerciseListVisible && (
        <ExerciseList onHide={handleHideExerciseList} data={yourDataHere} />
      )}
    </>
  );
};

export default ParentComponent;
