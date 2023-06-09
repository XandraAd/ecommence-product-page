/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import IconMinus from '../images/icon-minus.svg'
import IconPlus from '../images/icon-plus.svg'

const FunctionCounter = () => {
    const [count, setCount] = useState(0)

    function handleIncrease() {
        setCount(count+1)
      }
      function handleDecrease() {
        setCount(prevCount => prevCount - 1)
      }


  return (
    
       <div className="d-flex border bg-light">
     <img className="align-self-center" onClick={handleDecrease} src={IconMinus} alt="minus sign" />
    <h5>{count}</h5>
    <img className="align-self-cente " onClick={handleIncrease} src={IconPlus} alt="minus sign" />
    </div>
  )
}

export default FunctionCounter;