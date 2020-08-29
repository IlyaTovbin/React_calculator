import React, { Component } from 'react';
import Button from '../UI/button/Button';
import Input from '../UI/input/Input';
import './Calculator.css';
import mathFunc from 'math-expression-evaluator';

class Calculator extends Component {

  state = {
    rows: [
      [7, 8, 9, '+'],
      [4, 5, 6, '-'],
      [1, 2, 3, '/'],
      [0, '.', '=', '*'],
    ],
    inputValue: '0',
    isTouched: false
  }

  numberClick = inputValue => {
    if(this.state.isTouched){
      inputValue = '' + this.state.inputValue + inputValue; 
      this.setState({
        inputValue,
     })
    }else{
      this.setState({
        inputValue,
        isTouched: true
     })
    }

  }

  ActionClick= event => {
    switch(event){
      case 'C':
        this.setState({ inputValue: '0', isTouched: false});
        break;
      case '=':
        let value = mathFunc.eval(this.state.inputValue);
        this.setState({ inputValue: value });
        break;
      default:
        let inputValue = this.state.inputValue + event;
        this.setState({ inputValue });
        break;
    }
  }

  render() { 
    const {rows, inputValue} = this.state;
    const classes = {
      action: 'white-color btns',
      number: 'react-color btns'
    }

    return ( 

      <div className="main-clac-box">
        <div className="row">
          <Input value={inputValue} />
          <Button
            value="C"
            clickEvent={this.ActionClick}
            classes={classes.action} 
          />
        </div>
        {rows.map((row, index) => (
          <div key={index} className="row d-flex justify-content-between">
            {row.map((item, index) => (
              <Button
                classes={
                  Number.isInteger(item)
                  ? classes.number
                  : classes.action
                }
                clickEvent={
                  Number.isInteger(item)
                  ? this.numberClick
                  : this.ActionClick
                }
                key={index}
                value={item}
              />
            ))}
          </div>
        ))}
      </div>

     );
  }
}
 
export default Calculator;