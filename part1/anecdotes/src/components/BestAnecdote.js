import React from 'react';

const BestAnecdote = ({ points, anecdotes}) => {
  console.log(points);
  console.log(anecdotes);

  let theHighest = [0, 0];
  
  Object.entries(points).forEach(([key, value]) => {
    if (value > theHighest[1]) {
      theHighest = [key, value];
    }
  })

  return (
    <>
      <p>{anecdotes[theHighest[0]]}</p>
      <p>Votes: {theHighest[1]}</p>
    </>
  )
}



export default BestAnecdote;