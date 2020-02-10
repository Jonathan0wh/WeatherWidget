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
  return parseFloat((celsius * (9 / 5) + 32).toFixed(0));
}

export function getCelsiusFromFahrenheit(fahrenheit: number) {
  return parseFloat(((fahrenheit - 32) * (5 / 9)).toFixed(0));
}

export function getWeatherIconUri(iconCode: string) {
  return `https://www.weatherbit.io/static/img/icons/${iconCode}.png`;
}
