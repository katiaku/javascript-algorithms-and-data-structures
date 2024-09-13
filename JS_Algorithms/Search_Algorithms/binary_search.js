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

// Recursive Binary Search

function recursiveBinarySearch(array, target) {
  return search(array, target, 0, arr.length - 1);
}

function search(array, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (target === array[middleIndex]) {
    return middleIndex;
  }

  if (target < arr[middleIndex]) {
    return search(array, target, leftIndex, middleIndex - 1);
  } else {
    return search(array, target, middleIndex + 1, rightIndex);
  }
}

console.log(recursiveBinarySearch(arr, 6));
console.log(recursiveBinarySearch(arr, 20));

// Big O: O(logn)
