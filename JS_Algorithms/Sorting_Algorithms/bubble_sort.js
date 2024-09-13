// Problem: Given an array of integers, sort the array.
// Compare adjacent elements in the array and swap the 
// positions if they are not in the intended order.
// Repeat the instruction as you step through each element
// in the array.

function bubbleSort(array) {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

const arr = [-6, 20, 8, -2, 4];
bubbleSort(arr);
console.log(arr);

// Big O: O(n^2)
