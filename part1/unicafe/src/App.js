import React, { useState } from 'react';
import Buttons from './components/Buttons';
import Statistics from './components/Statistics';


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const allFeedback = {
    'good': good,
    'neutral': neutral,
    'bad': bad    
  }; 

  // Converts allFeedback object to an array of key/value pairs to pass to child child component
  // const allFeedbackArr = Object.entries(allFeedback);

  const handleFeedback = {
    handleGood: () => {
      setGood(good + 1);
    },

    handleNeutral: () => {
      setNeutral(neutral + 1);
    },

    handleBad: () => {
      setBad(bad + 1);
    }
  }

  return (
    <div>
      <Buttons handleFeedback={handleFeedback} />
      <Statistics allFeedback={allFeedback} />
    </div>
  )
}

export default App;
