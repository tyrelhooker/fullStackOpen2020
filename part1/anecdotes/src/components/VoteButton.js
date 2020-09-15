import React from 'react';

const VoteButton = ({ handlePoints }) => {
  return (
    <button onClick={handlePoints}>Vote</button>
  )
}

export default VoteButton;