import React from 'react';

const Total = ({ allFeedback }) => {

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
    let total = sumFeedback();
    let numerator = allFeedback.good;

    return +((numerator / total) * 100).toFixed(2);
  }

  return (
    <>
      <tr>
        <td>Total Feedback: </td>
        <td>{sumFeedback()}</td>
      </tr>
      <tr>
        <td>Average Feedback: </td>
        <td>{isNaN(calcAverage()) ? 'No Reviews Submitted Yet' : calcAverage()}</td>
      </tr>
      <tr>
        <td>Percent of Positive Reviews: </td>
        <td>{isNaN(calcPositve()) ? 'No Reviews Submitted Yet' : calcPositve() + '%'}</td>
      </tr>
    </>
  )
}

export default Total;