// The Tower of Hanoi is a classic recursive problem that 
// involves moving a stack of disks from one peg to another, 
// following a set of rules.

// There are three pegs (A, B, and C), and n disks of different 
// sizes stacked on peg A in decreasing size from top to bottom. 
// The goal is to move all the disks from peg A to peg C, 
// following these rules:
// You can only move one disk at a time.
// You cannot place a larger disk on top of a smaller one.
// You can use peg B as an auxiliary peg to help with the process.

// Recursive Strategy
// Move the top n-1 disks from peg A to peg B, using peg C as auxiliary.
// Move the nth (largest) disk directly from peg A to peg C.
// Move the n-1 disks from peg B to peg C, using peg A as auxiliary.
// This breaks down the problem into smaller subproblems, where you 
// repeatedly move disks until you have just one disk to move.


// Base Case
// When there is only one disk, you can simply move it from the source 
// peg to the destination peg.

// Algorithm
// Move n-1 disks from peg A to peg B (using C as an auxiliary).
// Move the nth disk (largest) from peg A to peg C.
// Move the n-1 disks from peg B to peg C (using A as an auxiliary).

function towerOfHanoi(n, fromPeg, toPeg, usingPeg) {
  if (n === 1) {
    console.log(`Move disc 1 from ${fromPeg} to ${toPeg}`);
    return;
  }

  towerOfHanoi(n - 1, fromPeg, usingPeg, toPeg);
  console.log(`Move disc ${n} from ${fromPeg} to ${toPeg}`);

  towerOfHanoi(n - 1, usingPeg, toPeg, fromPeg);
}

towerOfHanoi(3, "A", "C", "B");

// Big O: O(2^n)
