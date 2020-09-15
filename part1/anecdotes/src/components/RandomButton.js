import React from 'react';

const RandomButton = ({ handleRandom }) => {
  return (
    <button onClick={handleRandom}>Next Anecdote</button>
  )
}

export default RandomButton;