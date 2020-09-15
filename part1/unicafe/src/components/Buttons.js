import React from 'react';

const Buttons = ({ handleFeedback: { handleGood, handleNeutral, handleBad } }) => {
  console.log(handleGood);
  return (
    <>
      <h2>Give Feedback</h2>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
    </>
  )
}

export default Buttons;