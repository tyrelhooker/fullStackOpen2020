import React from 'react';
import Feedback from './Feedback';
import Total from './Total';

const Statistics = ({ allFeedback }) => (
  <>
    <table>
      <thead>
        <tr>
          <th colSpan="2">Statistics</th>
        </tr>
      </thead>
      <tbody>
        <Feedback allFeedback={allFeedback} />
        <Total allFeedback={allFeedback} />
      </tbody>
    </table>
  </>
)
  

export default Statistics;