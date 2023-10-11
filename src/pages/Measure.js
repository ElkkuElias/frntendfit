import React from 'react';
import { Link } from 'react-router-dom';
import './Measure.css';

function Navigation() {
  return (
    <div>
        <h2 className='h2'>What would you like to calculate?</h2>
        <div className='square-buttons'>
      <Link to="/CalorieCalculator">
        <button className="square-button">Calculate Calories</button>
      </Link>
      <Link to="/MaxRepetitionCalculator">
        <button className="square-button">Calculate Max Repetition</button>
      </Link>
      </div>
    </div>
  );
}

export default Navigation;