import { StyleSheet } from "react-native";

// Definir colores como variables
const primaryColor = '#35424a'; // Azul oscuro
const backgroundColor = '#f0f4f7'; // Gris claro
const textColor = '#1a1a1a'; // Negro
const buttonBorderColor = '#8c8c8c'; // Gris medio
const buttonTextColor = '#ffffff'; // Blanco

export const calculatorStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayContainer: {
    margin: 10,
  },
  display: {
    fontSize: 50,
    color: textColor,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: primaryColor,
    padding: 20,
    margin: 5,
    borderRadius: 10,
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: buttonBorderColor,
  },
  buttonText: {
    fontSize: 25,
    color: buttonTextColor,
  },
});
