import React, { useState, useEffect } from 'react';
import RandomButton from './components/RandomButton';
import VoteButton from './components/VoteButton';
import BestAnecdote from './components/BestAnecdote';


const anecdotes = ["If it hurts, do it more often",'Adding manpower to a late software project makes it later!','The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.','Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', 'Premature optimization is the root of all evil.', 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

const random = (array) => {
  let maxNumber = array.length;
  let randomNumber = Math.floor((Math.random() * maxNumber));

  return (
    randomNumber
  )
}

const App = () => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({ 
    0: 0,
    1: 0, 
    2: 0, 
    3: 0, 
    4: 0, 
    5: 0 
  });
  
  const handleRandom = () => setSelected(random(anecdotes));  

  const handlePoints = () => {
    const copy = { ...points };
    copy[selected] += 1;
    setPoints(copy);
  }

  return (
    <div>
      <h2>Anecdote of the Day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]}</p>
      <RandomButton handleRandom={handleRandom} />
      <VoteButton handlePoints={handlePoints}/>
      <br />

      <h2>Most popular Anecdote</h2>
      <BestAnecdote points={points} anecdotes={anecdotes} />
    </div>
  )
}




export default App;
