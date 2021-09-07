import React, { useState } from 'react'
import Buttons from './components/Buttons';
import Input from './components/Input';
import Error from './components/Error'; 

function Calculator() {
  const operators = ['-', '*', '+', '/', '.'];
  const [input, setInput] = useState('0');
  const [equal, setEqual] = useState(false);
  const [error, setError] = useState('');

  const addValueForInput = value => {
    if (input.length > 14) {
      setError('Слишком длинный ввод');
      return
    }

    if ((input === '0' || equal) && value !== '.') {
      setInput(value);
      setEqual(false);
    } else {
      setInput(prev => prev + value);
    }
  }

  const checkOperators = () => {
    return operators.includes(input[input.length - 1]);
  }

  const checkDot = () => {
    for (let i = input.length - 1; i >= 0; i--) {
      if (operators.includes(input[i])) {
        return input[i];
      }
    }
  }

  const handleEquals = () => {
    setError('');

    let result = String(Function(`'use strict'; return (${input})`)());

    if (result.length > 14) {
      result = result.slice(0, 15);
    }

    setInput(result);
    setEqual(true);
  }

  const handleOperator = operator => {
    setError('');

    if (input === '0' && operator !== '-') {
      setError('Некорректный ввод');
      return;
    }

    if (equal) {
      setInput(prev => prev + operator);
      setEqual(false);
      return;
    }
    
    if (checkOperators()) {
      setError('Некорректный ввод');
      return;
    }

    addValueForInput(operator);
  }

  const handleNumbers = number => {
    setError('');

    if (number === 'AC') {
      setInput('0');
      setEqual(false);
      return;
    }

    if (number === '.' && (equal || checkDot() === '.' || checkOperators())) {
      setError('Некорректный ввод');
      return;
    }

    addValueForInput(number);  
  }

  return (
    <>
    {error && <Error text={error} />}
    <div className="calculator">
      <Input input={input} />
      <Buttons
        handleEquals={handleEquals}
        handleOperator={handleOperator}
        handleNumbers={handleNumbers}
      />  
    </div>
    </>
  );
}

export default Calculator;
