import React from 'react';
//TODO Check if this is the proper way to handle event handlers 
const Button = ({ onClick: { handleIncrease, handleDecrease, handleReset } }) => {
  console.log(handleIncrease);

  return (
    <>
      <button onClick={() => handleIncrease()}>plus</button>
      <button onClick={() => handleDecrease()}>minus</button>
      <button onClick={() => handleReset()}>reset</button>
    </>
  )
}

export default Button;