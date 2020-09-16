import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';

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
