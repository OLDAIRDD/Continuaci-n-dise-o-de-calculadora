
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { calculatorStyles } from './componentes/estilo'; 
import useCalculadoraLogica from './componentes/CalculadoraLogica';

// Componente de botón reutilizable
const CalculatorButton = ({ onPress, text }) => (
  <TouchableOpacity style={calculatorStyles.button} onPress={onPress}>
    <Text style={calculatorStyles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

const Calculator = () => {
  const { displayValue, handleInput } = useCalculadoraLogica();

  // Definir botones como array
  const buttons = [
    ['%', 'CE', 'C', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=', '√'],
  ];

  return (
    <View style={calculatorStyles.container}>
      <View style={calculatorStyles.displayContainer}>
        <Text style={calculatorStyles.display}>{displayValue}</Text>
      </View>
      {/* Mapear sobre el array de botones */}
      {buttons.map((row, rowIndex) => (
        <View key={rowIndex} style={calculatorStyles.row}>
          {row.map((button) => (
            <CalculatorButton key={button} onPress={() => handleInput(button)} text={button} />
          ))}
        </View>
      ))}
    </View>
  );
};

export default Calculator;

