/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'

const FunctionCounter = () => {
    const [count, setCount] = useState(0)

    function handleIncrease() {
        setCount(prevCount => prevCount + 1)
      }
      function handleDecrease() {
        setCount(prevCount => prevCount - 1)
      }


  return (
    
       <div className="FunctionalCounterContainer">
        <h2>Functional Component</h2>
            <button className="counter--minus" onClick={handleDecrease}> - </button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={handleIncrease}> + </button>
    </div>
  )
}

export default FunctionCounter;