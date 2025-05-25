import React, { useState } from 'react'

const Counter = () => {
const [counter, setCounter] =  useState(1);

const increaseVal = ()=>{
    
   if (counter < 15){
    setCounter(counter + 1)
   }
}
const decreaseVal = ()=>{
    
   if (counter > 1){
    setCounter(counter - 1)
   }
}

  return (
    <div>
      <p>count <strong>{counter}</strong></p>
      <button onClick={increaseVal}>Increase</button>&nbsp;<button onClick={decreaseVal}>Decrease</button>
    </div>
  )
}

export default Counter
