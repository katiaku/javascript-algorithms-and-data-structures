// Selection Sort works by repeatedly finding the smallest 
// (or largest, depending on the sorting order) element from 
// the unsorted portion of the array and swapping it with the 
// first unsorted element.

// Explanation:
// The outer loop iterates through each element, considering 
// it as the start of the unsorted portion.
// The inner loop finds the smallest element from the unsorted 
// part of the array.
// If a smaller element is found, it swaps it with the current 
// element at index i.
// This process continues until the array is sorted.

function selectionSort(array) {
  // Iterate over the entire array
  for (let i = 0; i < array.length; i++) {
    // Assume the current element is the smallest
    let minIndex = i;

    // Find the minimum element in the unsorted part of the array
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the first element of the unsorted part
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }

  return array;
}

const arr = [-6, 20, 8, -2, 4];
selectionSort(arr);
console.log(arr);

// The time complexity of selection sort is O(n^2) in all cases.
