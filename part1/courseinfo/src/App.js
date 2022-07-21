import React from 'react';

const Header = ({ name }) => {
  return (
    <h1>{name}</h1>
  )
}

const Content = ({ parts }) => {

  return ( 
    <>
      {parts.map(part => <p key={part.name}>{part.name}: {part.exercises}</p>)}
    </>  
  )
}

const Total = ({ parts }) => {
  return (
    <p>Number of exercises: {parts.map(part => part.exercises).reduce((a,b) => a + b)}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name:'Fundamentals of React',
        exercises: 10
      },
      {
        name:'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
    ]
  }

  return (
    <>
      <Header {...course} />
      <Content {...course} />
      <Total {...course} />
    </>
  )
}

export default App;