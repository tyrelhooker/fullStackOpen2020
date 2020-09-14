import React, { useState } from 'react';
import Hello from './components/Hello.js';
import Counter from './components/Counter.js';
import Button from './components/Button.js';
import History from './components/History.js';

const App = () => {

  const [counter, setCounter] = useState(0);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const personInfo = {
    name: 'Peter', 
    age: '10'
  }

  // if (counter < 5) {
  //   setTimeout( 
  //     () => setCounter(counter + 1),
  //     1000
  //   )  
  // }
  const handleCounter = {
    handleIncrease: () => {
      setCounter(counter + 1);
      setLeft(left + 1);
      setAll(allClicks.concat('L'));
    },
    handleDecrease: () => {
      setCounter(counter - 1);
      setRight(right + 1);
      setAll(allClicks.concat('R'));
    },
    handleReset: () => {
      setCounter(0);
      setAll([]);
    }
  }

 

  return (
    <>
      <p>Hello World</p>
      <Hello personInfo={personInfo} />
      <Counter counter={counter} />
      <Button handleClick={handleCounter} />
      <br />
      <br />
      <History allClicks={allClicks} />
      <button onClick={() => console.log('button EH')}>Testing EHs</button>
    </>
  )
}

export default App;
