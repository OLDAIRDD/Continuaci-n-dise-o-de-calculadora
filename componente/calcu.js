import { useState, Math } from 'react';

const useCalculatorLogic = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleInput = (input) => {
    if (input === 'C') {
      clearCalculator();
    } else if (input === '.') {
      handleDotInput();
    } else if (!isNaN(input)) {
      handleNumberInput(input);
    } else if (['+', '-', '*', '/'].includes(input)) {
      handleOperatorInput(input);
    } else if (input === '%') {
      handlePercentageInput();
    } else if (input === 'CE') {
      handleBackspaceInput();
    } else if (input === '=') {
      handleEqualInput();
    }else if (input === '√') { 
        handleSquareRootInput();
    }
  };

  const clearCalculator = () => {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const handleDotInput = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const handleNumberInput = (input) => {
    if (waitingForSecondOperand) {
      setDisplayValue(String(input));
      setWaitingForSecondOperand(false);
    } else {
      // Validar límite de 18 números antes de realizar una operación
      if (displayValue.length < 18) {
        setDisplayValue(displayValue === '0' ? String(input) : displayValue + input);
      }
    }
  };

  const handleOperatorInput = (input) => {
    const inputValue = parseFloat(displayValue);
    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = evaluate();
      setFirstOperand(result);
      setDisplayValue(String(result));
    }
    setWaitingForSecondOperand(true);
    setOperator(input);
  };

  const handlePercentageInput = () => {
    const percentageValue = parseFloat(displayValue) / 100;
    setDisplayValue(String(percentageValue));
  };

  const handleBackspaceInput = () => {
    if (displayValue.length === 1) {
      setDisplayValue('0');
    } else {
      setDisplayValue(displayValue.slice(0, -1));
    }
  };

  const handleEqualInput = () => {
    if (operator && !waitingForSecondOperand) {
      const result = evaluate();
      setFirstOperand(result);
      setDisplayValue(String(result));
      setOperator(null);
    }
  };

  const handleSquareRootInput = () => {
    const inputValue = parseFloat(displayValue);
    const result = Math.sqrt(inputValue); 
    setDisplayValue(String(result));
    setFirstOperand(result);
    setOperator(null);
    setWaitingForSecondOperand(true);
  };

  const evaluate = () => {
    const secondOperand = parseFloat(displayValue);
    let result = 0;
    switch (operator) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case '*':
        result = firstOperand * secondOperand;
        break;
      case '/':
        // Manejo de divisiones por cero
        result = secondOperand !== 0 ? firstOperand / secondOperand : 'Error';
        break;
      default:
        break;
    }
    return result;
  };

  return { displayValue, handleInput };
};

export default useCalculatorLogic;

