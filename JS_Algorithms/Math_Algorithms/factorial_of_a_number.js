// Problem: Given an integer "n", find the factorial 
// of that integer.
// In mathematics, the factorial of a non-negative 
// integer "n", denoted n!, is the product of all 
// positive integers less than or equal to "n".
// Factorial of zero is 1.
// factorial(5) = 5 * 4 * 3 * 2 * 1 = 120

function factorial(num) {
  let result = 1;

  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5));

// Big O: O(n)

// Recursive Factorial of a Number

function recursiveFactorial(num) {
  if (num === 0) {
    return 1;
  }

  // n! = n * (n - 1)!
  return num * recursiveFactorial(num - 1);
}

console.log(recursiveFactorial(5));

// Big O: O(n)
