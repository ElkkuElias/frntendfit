import React, { useState } from 'react';
import "./ExerciseList.css";

const ExerciseList = ({ data }) => {

  const [selectedId, setSelectedId] = useState(null);

  const addExerciseToFavorites = (newExercise) => {
    let favorites = JSON.parse(sessionStorage.getItem('favoriteExercises')) || [];
    console.log(favorites + "favourites");
    console.log(newExercise.name);
    // Check if the newExercise already exists in favorites
    const existsInFavorites = favorites.some((exercise) =>
      exercise.name === newExercise.name);

    if (existsInFavorites) {
      console.log('Exercise is already in favorites');
    } else {
      favorites.push(newExercise);
      sessionStorage.setItem('favoriteExercises', JSON.stringify(favorites));
    }

  }





  const handleGifNameClick = (e, exercise) => {
    const id = e.currentTarget.parentNode.id;
    console.log(id);
    console.log(exercise.name);
    console.log(exercise.gifUrl);
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
          <p className="exercise-card"><span className="exercise-header"><strong>Target: </strong></span>{exercise.target}</p>
          <p className="exercise-card"><span className="exercise-header"><strong>Equipment: </strong></span>{exercise.equipment}</p>
          <p className="exercise-card"><span className="exercise-header"><strong>Instructions:</strong></span>
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