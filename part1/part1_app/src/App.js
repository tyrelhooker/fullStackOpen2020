import React from 'react';
import Hello from './components/Hello.js'

const App = () => {

  const personInfo = {
    name: 'Peter', 
    age: '10'
  }

  return (
    <>
      <p>Hello World</p>
      <Hello personInfo={personInfo} />
    </>
  )
}

export default App;
