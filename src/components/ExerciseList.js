import React, { useState } from 'react';
import "./ExerciseList.css";

const ExerciseList = ({ data }) => {

  const [selectedId, setSelectedId] = useState(null);

  const addExerciseToFavorites = (newExercise) => {
    let favorites = JSON.parse(sessionStorage.getItem('favoriteExercises')) || [];
    favorites.push(newExercise);
    sessionStorage.setItem('favoriteExercises', JSON.stringify(favorites));
  };

  const handleGifNameClick = (e, exercise) => {
    const id = e.currentTarget.parentNode.id; 
    console.log(id);
    setSelectedId(id);
    addExerciseToFavorites({
      name: exercise.name,
      gifUrl: exercise.gifUrl
    });
  };

  return (
    <div className="exercise-list">
      {data.map((exercise, index) => (
        <div key={index} id={index} className="exercise-card">
          <h2>{exercise.name}</h2>  
          <img className='giffi' src={exercise.gifUrl} alt={`${exercise.name} gif`} />
          <div className='plusbutton' onClick={(e) => handleGifNameClick(e, exercise)}>
            <button>Add to Favorites</button>
          </div>
          <p><strong>Target: </strong>{exercise.target}</p>
          <p><strong>Equipment: </strong>{exercise.equipment}</p>
          <p><strong>Instructions:</strong></p>
          <ol>
            {exercise.instructions.map((instruction, i) => (
              <li key={i}>{instruction}</li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};

export default ExerciseList;