const convertToCelsius = function(x) {
  x = (x - 32) * (5 / 9);
  return Number(x.toFixed(1));
};

const convertToFahrenheit = function(x) {
  x = x * (9 / 5) + 32;
  return Number(x.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
