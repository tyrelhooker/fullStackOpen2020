import React, { useState } from 'react';
import Hello from './components/Hello.js';
import Counter from './components/Counter.js';

const App = () => {

  const [counter, setCounter] = useState(0);

  const personInfo = {
    name: 'Peter', 
    age: '10'
  }

  if (counter < 5) {
    setTimeout( 
      () => setCounter(counter + 1),
      1000
    )  
  }
 

  return (
    <>
      <p>Hello World</p>
      <Hello personInfo={personInfo} />
      <Counter counter={counter} />
    </>
  )
}

export default App;
