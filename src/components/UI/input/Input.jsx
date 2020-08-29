import React from 'react';
import './Input.css';

const Input = props => {

  return (
    <input autoFocus disabled value={props.value} className="calc-input" type="text"/>
  )
}

export default Input;