import React, { useState } from 'react';
import Plot from 'react-plotly.js';

function PolynomialGraph() {
  const [coefficients, setCoefficients] = useState([]);
  const [formula, setFormula] = useState('');

  // Parse the input string and extract the coefficients as an array of numbers
  const handleInputChange = (event) => {
    const input = event.target.value;
    const newCoefficients = input.split(',').map(Number);
    setCoefficients(newCoefficients);

    // Update the formula string
    let newFormula = '';
    for (let i = 0; i < newCoefficients.length; i++) {
      if (i > 0) {
        if (newCoefficients[i] > 0) {
          newFormula += ' + ';
        } else {
          newFormula += ' - ';
        }
      }
      newFormula += Math.abs(newCoefficients[i]) + 'x^' + i;
    }
    setFormula(newFormula);
  };

  // Generate data for the graph by evaluating the polynomial at a range of x values
  const xValues = [];
  const yValues = [];
  for (let x = -10; x <= 10; x += 0.1) {
    xValues.push(x);
    let y = 0;
    for (let i = 0; i < coefficients.length; i++) {
      y += coefficients[i] * Math.pow(x, i);
    }
    yValues.push(y);
  }

  return (
    <div>
      <form>
        <label>
          Coefficients:
          <textarea rows="2" cols="30" onChange={handleInputChange} />
        </label>
      </form>
      <p>{formula}</p>
      <Plot
        data={[
          {
            x: xValues,
            y: yValues,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
        ]}
        layout={{
          title: 'Polynomial Graph',
          xaxis: {
            range: [-10, 10],
            title: 'x',
          },
          yaxis: {
            range: [-10, 10],
            title: 'y',
          },
        }}
      />
    </div>
  );
}

export default PolynomialGraph;
