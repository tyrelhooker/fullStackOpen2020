import React, { useState, useEffect } from 'react';
import './App.css';
import Headline from './components/Headline';
import Input from './components/Input';

function App() {
  const [greeting, setGreeting] = useState('Hello function component');

  const handleChange = (event) => setGreeting(event.target.value);

  return (
    <div className="App">
      <Headline headline={greeting}  />
      <Input value={greeting} onChangeInput={handleChange}>
        Set Greeting:
      </Input>
    </div>
  );
}

export default App;
  