// Error while testing empty fields. If can't be fixed - remove from workoutController.js as well

import { useState } from 'react'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from '../hooks/useAuthContext';
import { REACT_APP_API_URL } from '../utils/apiConfig';

const apiUrl = `${REACT_APP_API_URL}/api/workouts`;

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()

  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)
  //const [emptyFields, setEmptyFields] = useState([])

  // const REACT_APP_API_URL='http://localhost:3001';


  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('You must be logged in')
      return
    }

    const workout = { title, load, reps }

    const response = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
         'Authorization' : `Bearer ${user.token}`
      }
    })
    const newWorkout = await response.json()

    if (!response.ok) {
      setError(newWorkout.error)
      //setEmptyFields(newWorkout.emptyFields)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
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
        onChange={(e) => setTitle(e.target.value)}
        value={title}
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
    </form>
  )
}

export default WorkoutForm