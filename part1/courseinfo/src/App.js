import React from 'react';

const Header = ({course}) => {
  console.log(course);

  return (
    <h1>{course.name}</h1>
  )
}



const Content = ({ course }) => {
  console.log(course);
  return ( 
    <>
      <Part parts={course.parts} />
    </>  
  )
}

const Part = ({parts}) => (
  <>
    {parts.map(part => <p key={part.name}>{part.name}: {part.exercises}</p>)}
  </>
)


const Total = ({ exercises }) => {
  console.log(exercises);

  return (
    <p>Number of exercises: {exercises.reduce((a, b) => a + b)}</p>
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
      <Header course={course} />
      <Content course={course} />
      <Total exercises={course.parts.map(part => part.exercises)} />
    </>
  )
}

export default App;
