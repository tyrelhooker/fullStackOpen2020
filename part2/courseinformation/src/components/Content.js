import React from 'react';
import Part from './Part';

const Content = ({ content }) => {
  console.log('content', content);
  return ( 
    <>
      <Part parts={content.parts.map(value => value)} key={content.id} />
    </>  
  )
}

export default Content;