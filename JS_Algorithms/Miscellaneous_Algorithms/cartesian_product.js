// Problem: Given two finite non-empty sets, find their
// Cartesian Product.
// In mathematics, specifically set theory, the Cartesian
// Product of two sets A and B, denoted AxB, is the set of
// all ordered pairs (a, b) where a is in A and b is in B.
// const A = [1, 2]
// const B = [3, 4]
// AxB = [[1, 3], [1, 4], [2, 3], [2, 4]]

function cartesianProduct(set1, set2) {
  const result = [];

  for (let i = 0; i < set1.length; i++) {
    for (let j = 0; j < set2.length; j++) {
      result.push([set1[i], set2[j]]);
    }
  }

  return result;
}

const A = [1, 2]
const B = [3, 4]
console.log(cartesianProduct(A, B));

// Big O: O(mn) // as the sets can be of different length
