// src/CalorieCalculator.js

import React, { useState } from 'react';
import './CalorieCalculator.css';

function CalorieCalculator() {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [calories, setCalories] = useState(null);

    const calculateCalories = () => {
            // Implement the Harris-Benedict equation here to calculate calories
            // You can find the equation and constants in the description
            // Calculate calories based on gender, age, weight, height, and activity level
            // Set the result in the 'calories' state
        if(!isNaN(age)&&!isNaN(weight)&& age > 0 && weight > 0){
            let calculateCalories = 0;
            let sedentary = 1.2;
            let lightlyActive = 1.375;
            let moderatelyActive = 1.55;
            let veryActive = 1.725;
            
            if (gender === 'male'){
                calculateCalories = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
                
            } else if (gender === 'female')
                calculateCalories = 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age);
            if (activityLevel === 'sedentary'){
                calculateCalories = calculateCalories * sedentary;
            }else if (activityLevel === 'lightlyActive'){
                calculateCalories = calculateCalories * lightlyActive;
            }else if (activityLevel === 'moderatelyActive'){
                calculateCalories = calculateCalories * moderatelyActive;
            }else if (activityLevel === 'veryActive'){
                calculateCalories = calculateCalories * veryActive;
            }
            setCalories(calculateCalories.toFixed(2));
        } else {
            setCalories(null);
        }
    };

  return (
    <div id="calorie-calculator">
      <h1>Calorie Calculator</h1>
        <p>
        The Calorie Estimation Tool helps you determine your daily calorie requirements. 
        It provides accurate calculations and offers guidance for weight management, 
        using the Revised Harris-Benedict equation for precise results.
        </p>
      <div>
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Age (years):
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Weight (kg):
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Height (cm):
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Activity Level:
          <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
            <option value="sedentary">Sedentary</option>
            <option value="lightlyActive">Lightly Active</option>
            <option value="moderatelyActive">Moderately Active</option>
            <option value="veryActive">Very Active</option>
          </select>
        </label>
      </div>
      <div>
        <button onClick={calculateCalories}>Calculate Calories</button>
      </div>
      {calories && <p>Your daily calorie needs: {calories} calories</p>}
    </div>
  );
};

export default CalorieCalculator;
