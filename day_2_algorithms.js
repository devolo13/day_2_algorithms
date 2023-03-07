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
  console.log(
    'You will need ' + change[0] + ' quarters, ' + change[1] + ' dimes, ' + change[2] + ' nickels, and ' + change[3] + ' pennies.'
  )
}