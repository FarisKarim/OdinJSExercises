const add = function(first, second) {
	return first + second
};

const subtract = function(first, second) {
	return first - second
};

const sum = function(array) {
	if (!array) {
    return 0
  }
  if (array.length == 1) {
    return array[0]
  } else {
    total = 0
    for (let i = 0; i < array.length; i++) {
      total += array[i]
    }
    return total
  }
};

const multiply = function(array) {
  if (!array) {
    return 0
  }
  total = 1
  for (let i = 0; i < array.length; i++) {
    total *= array[i]
  }
  return total
};

const power = function(first, second) {
	return first ** second
};

const factorial = function(number) {
  if (number <= 1) {
    return 1
  }
  return number * factorial(number - 1)
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
