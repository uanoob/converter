const getTemp = (name, value) => {
  const num = parseFloat(value);
  if (Number.isNaN(num)) {
    return '';
  }
  if (name === 'celsius') {
    const fahrenheit = Math.round((num * 9) / 5 + 32);
    const kelvin = Math.round(num + 273.15);
    return {
      fahrenheit: fahrenheit.toString(),
      kelvin: kelvin.toString(),
    };
  }
  if (name === 'fahrenheit') {
    const celsius = Math.round(((num - 32) * 5) / 9);
    const kelvin = Math.round(((num - 32) * 5) / 9 + 273.15);
    return {
      celsius: celsius.toString(),
      kelvin: kelvin.toString(),
    };
  }
  if (name === 'kelvin') {
    const celsius = Math.round(num - 273.15);
    const fahrenheit = Math.round(((num - 273.15) * 9) / 5 + 32);
    return {
      celsius: celsius.toString(),
      fahrenheit: fahrenheit.toString(),
    };
  }
  return null;
};

export default getTemp;
