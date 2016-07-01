//This is a small program to add multiples of 3 and 5 below 1000

function getTotal () {
  var sum = 0;
  for (var i = 1; i < 1000; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
      sum += i;
    }
  }
  return sum;
}

var result = alert("The total is " + getTotal());
