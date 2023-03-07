// Algorithms for day 2 of week 1

// Create a sigma function that takes a number and returns the sum of all positive integers from 1 to that number inclusive
function sigma(num) {
  var sum = 0;
  for (num; num > 0; num--) {
    sum += num;
  }
  return sum;
}

// write a factorial function that takes a number and returns the product of all positive integers from 1 to that number inclusive
function factorial(num) {
  var prod = 1;
  for (num; num > 0; num--) {
    prod *= num;
  }
  return prod;
}

// write a function that adds all values between two numbers if that value is divisible by either 3 or 5 but not both
function threesFives(num1, num2) {
  var sum = 0;
  for (var i = num1; i <= num2; i++) {
    if ((i % 3 == 0 || i % 5 == 0) && !(i % 3 == 0 && i % 5 == 0)) {
      sum += i;
    }
  }
  return sum;
}

// write a function that accepts a number of cents and computes the smallest amount of coins needed
function generateCoinChange(cents) {
  // change = [quarters, dimes, nickels, pennies]
  var change = [0, 0, 0, 0];
  // quarters
  while (cents >= 25) {
    change[0] += 1;
    cents -= 25;
  }
  // dimes
  while (cents >= 10) {
    change[1] += 1;
    cents -= 10;
  }
  // nickels
  while (cents >= 5) {
    change[2] += 1;
    cents -= 5;
  }
  // pennies
  while (cents >= 1) {
    change[3] += 1;
    cents -= 1;
  }
  console.log('You will need ' + change[0] + ' quarters, ' + change[1] + ' dimes, ' + change[2] + ' nickels, and ' + change[3] + ' pennies.');
}

// write a function that returns the fibonacci number for a given index
function fibonacci(index) {
  // decrementing var index to change to 0 index convention
  index--;
  var fib = [1, 1];
  while (typeof fib[index] === 'undefined') {
    fib[fib.length] = fib[fib.length - 2] + fib[fib.length - 1];
  }
  return fib[index];
}

// rewrite the sigma function recursively
function recursiveSigma(num) {
  if (num > 1) {
    return num + recursiveSigma(num - 1);
  }
  if (num === 1) {
    return 1;
  }
}

// rewrite the factorial function recursively
function recursiveFactorial(num) {
  if (num > 1) {
    return recursiveFactorial(num - 1) * num;
  }
  if (num === 1) {
    return 1;
  }
}

// rewrite the fibonacci function recursively
function recursiveFibonacci(index) {
  if (index > 0 && index < 3) {
    return 1;
  }
  if (index > 2) {
    return recursiveFibonacci(index - 2) + recursiveFibonacci(index - 1);
  }
}

// write an iterative function that determines if the given number is in an array
function binarySearch(arr, num) {
  while (arr.length > 0) {
    if (arr[Math.round((arr.length - 1) / 2)] === num) {
      return true;
    } else if (arr[Math.round((arr.length - 1) / 2)] > num) {
      arr.splice(Math.round(arr.length - 1) / 2);
    } else if (arr[Math.round((arr.length - 1) / 2)] < num) {
      arr.splice(0, Math.round(arr.length / 2));
    }
  }
  return false;
}

// rewrite the binary search function recursively
function recursiveBinarySearch(arr, num) {
  if (arr.length === 0) {
    return false;
  }
  if (arr[Math.round((arr.length - 1) / 2)] === num) {
    return true;
  } else if (arr[Math.round((arr.length - 1) / 2)] > num) {
    arr.splice(Math.round(arr.length - 1) / 2);
  } else if (arr[Math.round((arr.length - 1) / 2)] < num) {
    arr.splice(0, Math.round(arr.length / 2));
  }
  return recursiveBinarySearch(arr, num);
}

// write a function that returns the average value of an array
function avg(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// write a function that determines if an array has a point between indices where the sums are the same on both sides
function balancePoint(arr) {
  for (var i = 0; i < arr.length; i++) {
    var sum1 = 0;
    var sum2 = 0;
    // setting the left side sum
    for (var j = i; j > 0; j--) {
      sum1 += arr[j - 1];
    }
    // setting right side sum
    for (var j = i; j < arr.length; j++) {
      sum2 += arr[j];
    }
    if (sum1 === sum2) {
      return true;
    }
  }
  return false;
}

// write a function that finds a balance point on an index and returns that index or -1 if no index exists
function balanceIndex(arr) {
  for (var i = 0; i < arr.length; i++) {
    var sum1 = 0;
    var sum2 = 0;
    for (var j = i; j > 0; j--) {
      sum1 += arr[j - 1];
    }
    for (var j = i; j < arr.length - 1; j++) {
      sum2 += arr[j + 1];
    }
    if (sum1 == sum2) {
      return i;
    }
  }
  return -1;
}

// given an array of [x,y] coordinates, minimize the total distance between you and your customers
function tacoTruck(arr) {
  var xsum = 0;
  var ysum = 0;
  for (var i = arr.length - 1; i > 0; i -= 2) {
    xsum += arr[i - 1];
    ysum += arr[i];
  }
  return [xsum / (arr.length / 2), ysum / (arr.length / 2)];
}