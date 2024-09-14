// Problem: Given an array of integers, sort the array.
// Assume that the first element is already sorted and
// remaining elements are unsorted. Select an unsorted
// element and compare with all elements in the sorted
// part. If the elements in the sorted part are smaller 
// then the selected element, proceed to the next element
// in the unsorted part. Else, shift larger elements in
// the sorted part towards the right. Insert the selected
// element at the right index. Repeat till all the unsorted
// elements are placed in the right order.

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let numberToInsert = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > numberToInsert) {
      array[j + 1] = array[j];
      j = j - 1;
    }

    array[j + 1] = numberToInsert;
  }
}

const arr = [-6, 20, 8, -2, 4];
insertionSort(arr);
console.log(arr);

// Big O: O(n^2)
