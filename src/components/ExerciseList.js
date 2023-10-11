import React, { useState } from 'react';
import './ExerciseList.css';

const ExerciseList = ({ data }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [favorites, setFavorites] = useState(
    JSON.parse(sessionStorage.getItem('favoriteExercises')) || []
  );

  const toggleFavorite = (newExercise) => {
    const existsInFavorites = favorites.some(
      (exercise) => exercise.name === newExercise.name
    );

    if (existsInFavorites) {
      // Remove from favorites
      const updatedFavorites = favorites.filter(
        (exercise) => exercise.name !== newExercise.name
      );
      setFavorites(updatedFavorites);
      sessionStorage.setItem('favoriteExercises', JSON.stringify(updatedFavorites));
    } else {
      // Add to favorites
      const updatedFavorites = [...favorites, newExercise];
      setFavorites(updatedFavorites);
      sessionStorage.setItem('favoriteExercises', JSON.stringify(updatedFavorites));
    }
  };

  const isExerciseInFavorites = (exerciseName) => {
    return favorites.some((exercise) => exercise.name === exerciseName);
  };

  return (
    <div className="exercise-list">
      {data.map((exercise, index) => (
        <div key={index} id={index} className="exercise-card">
          <h2>{exercise.name}</h2>
          <img className="giffi" src={exercise.gifUrl} alt={`${exercise.name} gif`} />
          <div className="plusbutton" onClick={() => toggleFavorite(exercise)}>
            <button>
              {isExerciseInFavorites(exercise.name)
                ? 'Remove from Favorites'
                : 'Add to Favorites'}
            </button>
          </div>
          <p className="exercise-card">
            <span className="exercise-header"><strong>Target: </strong><span className="exercise-header-value">{exercise.target}</span></span>
          </p>
          <p className="exercise-card">
            <span className="exercise-header"><strong>Equipment: </strong><span className="exercise-header-value">{exercise.equipment}</span></span>
          </p>
          <p className="exercise-card" id='instructions'>
            <span className="exercise-header"><strong>Instructions:</strong></span>
            <ol>
              {exercise.instructions.map((instruction, i) => (
                <li key={i}>{instruction}</li>
              ))}
            </ol>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ExerciseList;
