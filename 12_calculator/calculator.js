const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(a) {
  let sum = 0;
  if (a.length === 0 || a[0] === 0) {
    return 0;
  }
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
};


const multiply = function(a) {
 let total = 1;
 for (let i = 0; i < a.length; i++) {
  total *=  a[i];
 }
 return total;
};

const power = function(num, pow) {
	let powerTotal = 1;
  for (let i = 0; i < pow; i++) {
    powerTotal *= num
  }
  return powerTotal;
};

const factorial = function(num) {
	let fac = 1;
  for (let i = 1; i <= num; i++) {
    fac *= i;
  }
  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
