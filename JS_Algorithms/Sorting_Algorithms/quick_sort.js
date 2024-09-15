// Problem: Given an array of integers, sort the array.
// Pick the pivot element (first, last or random element or median).
// Put everything that's smaller that the pivot into a "left"
// array and everything that's greater than the pivot into
// a "right" array. Repeat the process for the individual "left"
// and "right" arrays till you have an array of length 1 which
// is sorted by definition. Repeatedly concatenate the left array,
// pivot and right array till one sorted array remains.

function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  let pivot = array[array.length - 1];
  let lesserThanPivot = [];
  let greaterThanPivot = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      lesserThanPivot.push(array[i]);
    } else {
      greaterThanPivot.push(array[i]);
    }
  }

  return [...quickSort(lesserThanPivot), pivot, ...quickSort(greaterThanPivot)];
}

const arr = [-6, 20, 8, -2, 4];
quickSort(arr);
console.log(arr);

// Worst Case Big O: O(n^2) (the array is already sorted)
// Avg Case Big O: O(nlogn)
