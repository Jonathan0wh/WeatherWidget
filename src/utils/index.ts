export function nth(d: number) {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

export function getFahrenheitFromCelsius(celsius: number) {
  return celsius * (9 / 5) + 32;
}

export function getCelsiusFromFahrenheit(fahrenheit: number) {
  return (fahrenheit - 32) * (5 / 9);
}
