//JS for Euler Fibonacci number problem
var previousNumber = 1;
var currentNumber = 2;
var runningTotal = 0;
var sum = 0;

function getFibbo() {
  while ( previousNumber < 4e6) {
    if ((previousNumber % 2) === 0) {
      sum += previousNumber;
    }
    runningTotal = previousNumber + currentNumber;
    previousNumber = currentNumber;
    currentNumber = runningTotal;
    console.log(runningTotal);
  }
  return sum;
};

var result = getFibbo();
console.log(result);
