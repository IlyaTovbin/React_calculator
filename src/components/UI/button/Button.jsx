import React from 'react';
import './Button.css';

const Button = props => {
  return (
    <button onClick={() => props.clickEvent(props.value)} className={props.classes}>{props.value}</button>
  )
}

export default Button;