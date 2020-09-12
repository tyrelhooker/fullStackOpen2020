import React from 'react';

const Header = ({ courseName }) => <h1>{courseName}</h1>;

const Content = ({ part1, exercises1, part2, exercises2, part3, exercises3 }) => ( 
  <>
    <Part partNum={part1} exerciseNum={exercises1} />
    <Part partNum={part2} exerciseNum={exercises2} />
    <Part partNum={part3} exerciseNum={exercises3} />
  </>  
)

const Part = ({ partNum, exerciseNum }) => (
  <>
    <p>
      {partNum}: {exerciseNum}
    </p>
  </>
)


const Total = ({ exercises1, exercises2, exercises3 }) => <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>

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
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App;
