import { useEffect, useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import useExerciseTitle from "../hooks/useExerciseTitle";

// components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
//Misc.

import "./History.css"
import './star.jpg'

const apiUrl = `https://fitnessappserver.onrender.com/api/workouts`;

const History = () => {
  const { workouts, dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()
  const [favorites, setFavorites] = useState([])
  const [areFavoritesVisible, setAreFavoritesVisible] = useState(false)
  const { excerciseTitle, handlexcerciseTitleChange, resetExerciseTitle } = useExerciseTitle("");



  const retrieveFavorites = () => {
    let favorites = JSON.parse(sessionStorage.getItem('favoriteExercises')) || [];
    setFavorites(favorites);
  };

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(apiUrl, {
        headers: { 'Authorization': `Bearer ${user.token}` } // sending auth header with the user's token, which we grab on the bakend to protect API routes
      })
      const allWorkouts = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: allWorkouts }) // payload: full array of workouts
      }
    }

    if (user) {
      fetchWorkouts()
    }

  }, [dispatch, user])

  useEffect(() => {
    retrieveFavorites()
  }, []);

  const handleClick = (index) => {
    // Remove the item from the favorites array
    const updatedFavorites = [...favorites];
    updatedFavorites.splice(index, 1);
    setFavorites(updatedFavorites);
    sessionStorage.setItem("favoriteExercises", JSON.stringify(updatedFavorites));
  };


  return (
    <div className="history">
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
      <WorkoutForm
        setAreFavoritesVisible={setAreFavoritesVisible}
        areFavoritesVisible={areFavoritesVisible}
        excerciseTitle={excerciseTitle}
        handlexcerciseTitleChange={handlexcerciseTitleChange}
        resetExerciseTitle={resetExerciseTitle}
      />
      {areFavoritesVisible && (
        <div className="modal">
          <div className="favourites">
            <h2>Favourite Exercises</h2>
            <button
              className="close-button"
              onClick={() => setAreFavoritesVisible(false)}
            >
              Close
            </button>
            <div className="grid">
              {favorites.length > 0 ? (
                favorites.map((exercise, index) => (
                  <div key={index} className="grid-item"
                    onClick={() => {
                      handlexcerciseTitleChange(exercise.name);
                      setAreFavoritesVisible(false);
                    }}>
                    <p>{exercise.name}</p>
                    <img src={exercise.gifUrl} alt={exercise.name} />
                    <span
                      className="material-symbols-outlined"
                      onClick={() => handleClick(index)}
                    >
                      disabled_by_default
                    </span>
                  </div>
                ))
              ) : (
                <p>No favorite exercises added yet.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default History;
