// Error while testing empty fields. If can't be fixed - remove from workoutController.js as well

import { useState } from 'react'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from '../hooks/useAuthContext';


const apiUrl = `https://fitnessappserver.onrender.com/api/workouts`;

const WorkoutForm = (props) => {
  const {
    excerciseTitle,
    handlexcerciseTitleChange,
    resetExerciseTitle,
    setAreFavoritesVisible,
    areFavoritesVisible,
  } = props;
  const { dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)



  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('You must be logged in')
      return
    }

    const workout = { title: excerciseTitle, load, reps };

    const response = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const newWorkout = await response.json()

    if (!response.ok) {
      setError(newWorkout.error)
      //setEmptyFields(newWorkout.emptyFields)
    }
    if (response.ok) {
      setError(null)
      resetExerciseTitle()
      setLoad('')
      setReps('')
      //setEmptyFields([])
      console.log('new workout added:', newWorkout)
      dispatch({ type: 'CREATE_WORKOUT', payload: newWorkout }) // payload - single workout we just added
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Excersize Title:</label>
      <input
        type="text"
        onChange={(e) => handlexcerciseTitleChange(e.target.value)}
        value={excerciseTitle}
      //className = {emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Load (in kg):</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      //className = {emptyFields.includes('load') ? 'error' : ''}
      />

      <label>Number of Reps:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      //className = {emptyFields.includes('reps') ? 'error' : ''}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
      <div className="button-container">
        <button
          className="history_button"
          type="button"
          onClick={() => setAreFavoritesVisible(!areFavoritesVisible)}
        >
          Show Favourites
        </button>
      </div>
    </form>
  )
}

export default WorkoutForm