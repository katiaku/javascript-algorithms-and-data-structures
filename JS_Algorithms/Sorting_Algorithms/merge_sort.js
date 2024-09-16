// Problem: Given an array of integers, sort the array.
// Divide the array into sub arrays, each containing only
// one element. Repeatedly merge the sub arrays to produce
// new sorted sub arrays until there is only one sub array
// remaining. That will be the sorted array.

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middle);
  const rightArray = array.slice(middle);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(left, right) {
  const sorted = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return [...sorted, ...left, ...right];
}

const arr = [-6, 20, 8, -2, 4];
mergeSort(arr);
console.log(arr);

// Big O: O(nlogn)
