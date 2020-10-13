import React from 'react';

const Input = ({ value, onChangeInput, children }) => {
  return (
    <>
      {children}
      <input type="text" value={value} onChange={onChangeInput} />
      

    </>
  ) 
}

export default Input;