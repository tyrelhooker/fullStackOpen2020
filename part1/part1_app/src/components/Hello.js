import React from 'react';

const Hello = ({ personInfo: { age, name } }) => {
  console.log(age)

  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - age;
  }

  return (
    <>
      <p>Hello {name}, you are {age} years old.</p>
      <p>So you were probably born in {bornYear()}.</p>
    </>
  )
}

export default Hello;
