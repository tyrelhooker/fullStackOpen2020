import React from 'react';

const Feedback = ({ allFeedback }) => (
  Object.entries(allFeedback).map(([key, value]) => (
    <tr key={key}>
      <td>{key}: </td>
      <td>{value}</td>
    </tr>
  ))
)

export default Feedback;