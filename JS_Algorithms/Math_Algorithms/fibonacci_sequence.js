// Problem: Given a number "n", find the first "n" elements 
// of the Fibonacci sequence.
// In mathematics, the Fibonacci sequence is a sequence in 
// which each number is the sun of the two preceding ones.
// The first two numbers in the sequence are 0 and 1.
// fibonacci(7) = [0, 1, 1, 2, 3, 5, 8]

function fibonacci(num) {
  const fib = [0, 1];

  for (let i = 2; i < num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

console.log(fibonacci(7));

// Big O: O(n)

// Recursive Fibonacci Sequence
// Problem: Given a number "n", find the nth element of the
// Fibonacci sequence.
// recursiveFibonacci(6) = 8

function recursiveFibonacci(num) {
  if (num < 2) {
    return num;
  }

  return recursiveFibonacci(num - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(6)); // 8

// Big O: O(2^n)
