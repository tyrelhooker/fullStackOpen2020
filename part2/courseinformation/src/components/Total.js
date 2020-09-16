import React from 'react';

const Total = ({ value }) => {
  console.log(value.exercises);

  return (
    <p>
      Number of exercises: {value
        .map(item => item.exercises)
        .reduce((a, b) => a + b)
      } 
    </p>
  )
}

export default Total;