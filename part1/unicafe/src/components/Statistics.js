import React from 'react';

const Total = ({ allFeedback }) => {
  console.log('Total', allFeedback);

  const sumFeedback = () => {
    // Converts object to array of values then uses array method to sum values
    return Object.values(allFeedback).reduce((prev, curr) => prev + curr );
  }

  const calcAverage = () => {
    let total = sumFeedback();
    let numerator = 0;
    console.log(total);

    for (const key in allFeedback) {
      if (key === 'good') {
        numerator += allFeedback[key];
      }

      if (key === 'bad') {
        numerator -= allFeedback[key];
      }
    }

    return +(numerator / total).toFixed(2);
  }

  const calcPositve = () => {

  }

  // calcAverage();
  return (
    <>
      <p>Total Feedback: {sumFeedback()}</p>
      <p>Average Feedback: {isNaN(calcAverage()) ? 0 : calcAverage()}</p>
    </>
  )
}



const Statistics = ({ allFeedback }) => {
  console.log(allFeedback);
  // console.log('allFeedbackArr', allFeedbackArr);

  return (
    <>
      {/* Converts object to array of key/val pairs arrays then maps them  */}
      {Object.entries(allFeedback).map(([key, value]) => (
        <p key={key}>{key}: {value}</p>
      ))}

      <Total allFeedback={allFeedback} />
    </>
  )
}

export default Statistics;