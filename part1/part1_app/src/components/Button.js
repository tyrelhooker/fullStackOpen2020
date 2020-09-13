import React from 'react';
//TODO Check if this is the proper way to handle event handlers 
const Button = ({ onClick: { handleIncrease, handleDecrease } }) => {
  console.log(handleIncrease);

  return (
    <>
      <button onClick={() => handleIncrease()}>plus</button>
      <button onClick={() => handleDecrease()}>minus</button>
    </>
  )
}

export default Button;