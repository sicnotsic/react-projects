import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const changeDisplay= (value) => {
    setDisplay(display + value);
  };

  const buttonClick = (value) => {
    if (value === '=') {
        if(display.charAt(display.length-1) != '+' && display.charAt(display.length-1) != '-' && display.charAt(display.length-1) != '/' && display.charAt(display.length-1) != '*'){
            calculate();
        }
    } else {
        if(display.charAt(display.length-1) != '+' && display.charAt(display.length-1) != '-' && display.charAt(display.length-1) != '/' && display.charAt(display.length-1) != '*' || parseInt(value)){
            changeDisplay(value);
        }
    }
  };

  const clear = () => {
    setDisplay('');
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
      setTimeout(() => {
        setDisplay('');
      }, 2000);
    }
  };

  const add = (a, b) => parseFloat(a) + parseFloat(b);

  const subtract = (a, b) => parseFloat(a) - parseFloat(b);

  const multiply = (a, b) => parseFloat(a) * parseFloat(b);

  const divide = (a, b) => parseFloat(a) / parseFloat(b);

  return (
    <div>
      <input type="text" value={display} readOnly />
      <br />
      <button onClick={() => buttonClick('1')}>1</button>
      <button onClick={() => buttonClick('2')}>2</button>
      <button onClick={() => buttonClick('3')}>3</button>
      <button onClick={() => buttonClick('+')}>+</button>
      <br />
      <button onClick={() => buttonClick('4')}>4</button>
      <button onClick={() => buttonClick('5')}>5</button>
      <button onClick={() => buttonClick('6')}>6</button>
      <button onClick={() => buttonClick('-')}>-</button>
      <br />
      <button onClick={() => buttonClick('7')}>7</button>
      <button onClick={() => buttonClick('8')}>8</button>
      <button onClick={() => buttonClick('9')}>9</button>
      <button onClick={() => buttonClick('*')}>*</button>
      <br />
      <button onClick={() => buttonClick('0')}>0</button>
      <button onClick={() => clear()}>C</button>
      <button onClick={() => buttonClick('=')}>=</button>
      <button onClick={() => buttonClick('/')}>/</button>
    </div>
  );
};

export default Calculator;