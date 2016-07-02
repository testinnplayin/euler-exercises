/* This file corresponds to the solution of the third Euler problem */
var totalNumber = 600851475143;
var curNumber = 2;
var testNumber = 0;

//must have limit of current number less than or equal to total number and must be square root based on primalty test
while (Math.sqrt(curNumber) <= totalNumber) {
  // test that current number actually completely divides total number
  if (totalNumber % curNumber === 0) {
    // if it does, then do the division
    totalNumber /= curNumber;
    //store the current prime number in the test number variable
    testNumber = curNumber;
  } else {
    //if the current number does not divide completely the total number, then advance a number, begin again at loop start
    curNumber ++;
  }
}

//check to find the biggest prime but the biggest prime must be less than the total number

if (totalNumber > testNumber) {
  //if it is, then save total number into the test number
  testNumber = totalNumber;
}

console.log(testNumber);

//answer is 6857
