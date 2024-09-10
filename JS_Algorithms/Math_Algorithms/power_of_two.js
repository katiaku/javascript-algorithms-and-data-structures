// Problem: Given a positive integer "n", determine if 
// the number is a power of 2 or not.
// An integer is a power of 2 if there exists an integer 
// "x" such that "n" === 2^x.
// isPowerOfTwo(1) = true (2^0)
// isPowerOfTwo(2) = true (2^1)
// isPowerOfTwo(5) = false

function isPowerOfTwo(num) {
  if (num < 1) {
    return false;
  }

  while (n > 1) {
    if (num % 2 !== 0) {
      return false;
    }

    n = n / 2;
  }

  return true;
}

console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));

// Big O: O(logn)

// The following solution uses a bitwise AND operation to determine  
// whether the number is a power of 2. Here's how it works:

// Powers of 2 in binary always have exactly one bit set to 1, 
// while all other bits are 0. For example:
// 1 is 0001 in binary
// 2 is 0010 in binary
// 4 is 0100 in binary
// 8 is 1000 in binary

// If num is a power of 2, subtracting 1 from num will change that one 
// set bit to 0 and turn all bits after it to 1. For example:
// 4 in binary is 0100, subtracting 1 gives 0011
// 8 in binary is 1000, subtracting 1 gives 0111
// The bitwise AND of num and num - 1 will result in 0 because none of 
// the bits will overlap:
// 0100 & 0011 = 0000 (for 4)
// 1000 & 0111 = 0000 (for 8)

// If num is not a power of 2, the result will not be 0 because more than 
// one bit will be set to 1.

// Examples:
// isPowerOfTwoBitWise(4):
// 4 & (4 - 1) → 0100 & 0011 = 0000, which is true.
// isPowerOfTwoBitWise(5):
// 5 & (5 - 1) → 0101 & 0100 = 0100, which is not 0, so the function 
// returns false.

function isPowerOfTwoBitWise(num) {
  if (num < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;

}

console.log(isPowerOfTwoBitWise(2));
console.log(isPowerOfTwoBitWise(5));

// Big O: O(1)
