import React, { useState } from 'react';
import './MaxRepetitionCalculator.css';

function MaxRepCalculator() {
  const [weight, setWeight] = useState('');
  const [repetitions, setRepetitions] = useState('');
  const [unit, setUnit] = useState('lbs');
  const [maxRep, setMaxRep] = useState(null);

  const calculateMaxRep = () => {
    const w = parseFloat(weight);
    const r = parseFloat(repetitions);

    if (!isNaN(w) && !isNaN(r) && r > 0) {
      let calculatedMaxRep = 0;
      if (unit === 'lbs') {
        calculatedMaxRep = w * (1 + 0.0333 * r);
      } else if (unit === 'kg') { 
        calculatedMaxRep = w * (1 + 0.0333 * r);
      }
      setMaxRep(calculatedMaxRep.toFixed(2));
    } else {
      setMaxRep(null);
    }
  };

  return (
    <body id="measure">
        <div>
            <h2>Max Repetition Calculator</h2>
            <p>
                This calculator estimates your 1 rep max (1RM) based on the weight and
                number of repetitions you can lift. 
                
                Uses The Epley formula (1985).
            </p>

            <div>
                <label>Unit:</label>
                <div className="unit-option">
                <input
                    type="radio"
                    id="lbs"
                    name="unit"
                    value="lbs"
                    checked={unit === 'lbs'}
                    onChange={() => setUnit('lbs')}
                />
                <label htmlFor="lbs">Lbs</label>
            </div>
            <div className="unit-option">
                <input
                    type="radio"
                    id="kg"
                    name="unit"
                    value="kg"
                    checked={unit === 'kg'}
                    onChange={() => setUnit('kg')}
                />
                <label htmlFor="kg">Kg</label>
            </div>
                <label htmlFor="weight">Weight:</label>
                <input
                    type="number"
                    id="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
            </div>   
        
            <div>
                <label htmlFor="repetitions">Repetitions:</label>
                <input
                    type="number"
                    id="repetitions"
                    value={repetitions}
                    onChange={(e) => setRepetitions(e.target.value)}
                />
            </div>
            <button onClick={calculateMaxRep}>Calculate 1 rep max</button>
            {maxRep !== null && (
            <p>Your estimated 1 rep max is: {maxRep} {unit}</p>
            )}
        </div>
    </body>
  );
}

export default MaxRepCalculator;

