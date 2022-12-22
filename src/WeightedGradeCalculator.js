import React, { useState } from 'react';

const WeightedGradeCalculator = () => {
    const [weights, setWeights] = useState({
        'Exam Average': '',
        'Homework Average': '',
        'Project Average': '',
      });
      const [grades, setGrades] = useState({
        'Exam Average': '',
        'Homework Average': '',
        'Project Average': '',
      });
      


  // Helper function to calculate the weighted grade
  const calculateWeightedGrade = () => {
    let totalWeight = 0;
    let weightedTotal = 0;
    for (const [key, value] of Object.entries(weights)) {
      // Return 0 if any of the input fields are empty
      if (!value || !grades[key]) {
        return 0;
      }
      totalWeight += value;
      weightedTotal += value * grades[key];
    }
    return weightedTotal / 100;
  };
  
  
  

  // Handle changes to the weights and grades inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name.startsWith('weight-')) {
      setWeights({
        ...weights,
        [name.split('-')[1]]: value || '',
      });
    } else if (name.startsWith('grade-')) {
      setGrades({
        ...grades,
        [name.split('-')[1]]: value || '',
      });
    }
  };
  
  

  // Render the component
  return (
    <div>
      <h1>Weighted Grade Calculator</h1>
      {/* Form to input weights and grades */}
      <form>
  {Object.keys(weights).map((key) => (
    <div key={key}>
      <label htmlFor={`weight-${key}`}>Weight for {key}:</label>
      <input
        type="number"
        name={`weight-${key}`}
        value={weights[key]}
        onChange={handleChange}
      />
      <label htmlFor={`grade-${key}`}>{key}:</label>
      <input
        type="number"
        name={`grade-${key}`}
        value={grades[key]}
        onChange={handleChange}
      />
    </div>
  ))}
</form>

      {/* Display the weighted grade */}
      <p>Weighted grade: {calculateWeightedGrade()}%</p>
    </div>
  );
};

export default WeightedGradeCalculator;
