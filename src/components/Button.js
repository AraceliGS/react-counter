import React from 'react';

const Button = ({count, setUpCount, setDownCount}) => {
  
  return (
    <div className="counter-container">
      <button onClick={setUpCount}>+</button>
      <span>{count}</span>
      <button onClick={setDownCount}>-</button>
    </div>
  )
}

export default Button;