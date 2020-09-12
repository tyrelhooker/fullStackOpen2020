import React from 'react';

const Header = ({courseName}) => <h1>{courseName}</h1>;
// TODO: const Content
const Content = ({part1, exercises1, part2, exercises2, part3, exercises3}) => ( 
  <>
    <p>
      {part1} {exercises1}
    </p>
    <p>
      {part2} {exercises2}
    </p>
    <p>
      {part3} {exercises3}
    </p>
  </>  
)

// TODO: const Total

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header courseName={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App;
