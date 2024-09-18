// Problem: Given a staircase of "n" steps, count he number
// of distinct ways to climb to the top. You can either climb
// 1 step or 2 steps at a time.

// For any step n, the number of ways to reach that step is the sum 
// of the ways to reach step n-1 and step n-2. This is because to reach 
// step n, you could have either come from the previous step (n-1) or 
// jumped from the step before that (n-2).
// This gives us a recurrence relation:
// climbingStaircase(n) = climbingStaircase(n - 1) + climbingStaircase(n - 2);
// climbingStaircase(1) = 1;
// climbingStaircase(2) = 2;
// climbingStaircase(3) = 3;
// climbingStaircase(4) = 5;

function climbingStaircase(n) {
  const numOfWays = [1, 2];

  for (let i = 2; i <= n; i++) {
    numOfWays[i] = numOfWays[i - 1] + numOfWays[i - 2];
  }

  return numOfWays[n - 1];
}

// Big O: O(n)
