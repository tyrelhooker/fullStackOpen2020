import React from 'react';

const BestAnecdote = ({ points, anecdotes}) => {
  console.log(points);
  console.log(anecdotes);

  const entries = Object.entries(points);
  console.log(entries);

  let theHighest = [0, 0];
  const highest = entries.forEach(([key, value]) => {
    // console.log(key, value);
    if (value > theHighest[1]) {
      theHighest = [key, value];
      
    }
    console.log('theHighest', theHighest)
  })

  // console.log('highest', highest);

  return (
    <>
      {anecdotes[theHighest[0]]}
      <p>Votes: {theHighest[1]}</p>
    </>
  )

  // let pointsArr = Object.values(points);
  // console.log(pointsArr);

  // let mapPointsArr = pointsArr.reduce((prev, curr) => {
  //   return Math.max(prev, curr);
  // })

  // let highestAnecdote = Object.keys(points).reduce((a, b) => {
  //   points[a] > points[b] ? anecdotes[a] : anecdotes[b])


  // return (
  //   <>
  //   <p>Anecdote here</p>
  //   <p>{mapPointsArr}</p>

  //   <p>{highestAnecdote}</p>
  //   </>
  // )
}


export default BestAnecdote;