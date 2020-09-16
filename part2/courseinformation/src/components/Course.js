import React from 'react';

const Header = ({ header }) => {
  // console.log(course);

  return (
      <>
      <h1>{header}</h1>
      </>
    )
  
}

const Content = ({ content }) => {
  console.log('content', content);
  return ( 
    <>
      <Part parts={content.parts.map(value => value)} key={content.id} />
    </>  
  )
}

const Part = ({ parts }) => {
  console.log(parts);
  return (
    <>
      {parts.map(part => 
        <p key={part.id}>
          {part.name}: {part.exercises}
        </p>
      )}
    </>
  )
}

const Total = ({ value }) => {
  console.log(value.exercises);

  return (
    <p>
      Number of exercises: {value
        .map(item => item.exercises)
        .reduce((a, b) => a + b)
      } 
    </p>
  )
}

const Course = ({ course }) => {
  // console.log(course);
  course.map(value => console.log('content.id', value.id));

  return (
    
    course.map(value => 
      <div key={value.id}>
        <Header header={value.name} />
        <Content content={value} />
        <Total value={value.parts} />
      </div>
    )
      
      
    
  )
}

export default Course;
