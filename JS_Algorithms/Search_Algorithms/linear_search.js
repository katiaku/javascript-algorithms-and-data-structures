// Problem: Given an array of "n" elements and a target
// element "t", find the index of "t" in the array. Return 
// -1 if the target element is not found.

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }

    return -1;
  }
}

const arr = [-5, 2, 10, 4, 6];

console.log(linearSearch(arr, 4));
console.log(linearSearch(arr, 5));

// Big O: O(n)
