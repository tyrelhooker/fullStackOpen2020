import React from 'react';

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return (
      <div>
        You need to click the plus or minus buttons to keep track of their click history.
      </div>
    )
  }

  return (
    <div>
      button press history: {allClicks.join(' ')}
    </div>
  )
  
}

export default History;