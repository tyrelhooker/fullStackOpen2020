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
    let total = sumFeedback();
    let numerator = allFeedback.good;

    return +((numerator / total) * 100).toFixed(2);
  }

  // calcAverage();
  return (
    <>
      <tr>Total Feedback: {sumFeedback()}</tr>
      <tr>Average Feedback: {isNaN(calcAverage()) ? 'No Reviews Submitted Yet' : calcAverage()}</tr>
      <tr>Percent of Positive Reviews: {isNaN(calcPositve()) ? 'No Reviews Submitted Yet' : calcPositve() + '%'}</tr>
    </>
  )
}



const Statistics = ({ allFeedback }) => {
  console.log(allFeedback);
  // console.log('allFeedbackArr', allFeedbackArr);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Statistics</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(allFeedback).map(([key, value]) => (
            <tr key={key}>
              <td>{key}: {value}</td>
            </tr>
          ))}
          <Total allFeedback={allFeedback} />
        </tbody>
      </table>
    </>
  )
}

export default Statistics;