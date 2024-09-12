// Problem: Given a sorted array of "n" elements and a target
// element "t", find the index of "t" in the array. Return -1
// if the target element is not found.

function binarySearch(array, target) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === array[middleIndex]) {
      return middleIndex;
    }

    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}

const arr = [-5, 2, 4, 6, 10];

console.log(binarySearch(arr, 6));
console.log(binarySearch(arr, 20));

// Big O: O(logn)
