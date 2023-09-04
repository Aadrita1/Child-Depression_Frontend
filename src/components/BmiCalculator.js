import React, { useState } from 'react';
import './BmiCalculator.css';
import Navbar from './Navbar';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [heightFeet, setHeightFeet] = useState('');
  const [heightInches, setHeightInches] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');

  const calculateBMI = () => {
    if (!weight || !heightFeet || !heightInches) {
      alert('Please enter weight, height (feet), and height (inches) to calculate BMI.');
      return;
    }
    const weightInKg = parseFloat(weight);
    const heightInMeters = (parseFloat(heightFeet) * 0.3048) + (parseFloat(heightInches) * 0.0254);
    const bmiValue = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setBmiCategory('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setBmiCategory('Normal weight');
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setBmiCategory('Overweight');
    } else if(bmiValue >= 30 && bmiValue <=34.99) {
      setBmiCategory('Class 1 Obese');
    } else if(bmiValue >= 35 && bmiValue <=39.99) {
      setBmiCategory('Class 2 Obese');
    } else{
      setBmiCategory('Class 3 Obese');
    }
  };

  return (
    <>
    <Navbar/>
    <div className="bmi-calculator">
      <h2>BMI Calculator</h2>
      <div className="input-group">
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Height (feet):</label>
        <input
          type="number"
          value={heightFeet}
          onChange={(e) => setHeightFeet(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Height (inches):</label>
        <input
          type="number"
          value={heightInches}
          onChange={(e) => setHeightInches(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi !== null && (
        <div>
          <p>Your BMI: {bmi}</p>
          <p>BMI Category: {bmiCategory}</p>
        </div>
      )}
    </div>
    </>
  );
};

export default BmiCalculator;
