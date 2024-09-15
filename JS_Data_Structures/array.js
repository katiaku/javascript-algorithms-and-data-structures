// An array is a data structure that can hold a collection 
// of values.
// Arrays can contain a mix of different data types.
// Arrays are resizable. You don't have to declare the size
// of an array before creating it.
// JavaScript arrays are zero-indexed and the insertion 
// order is maintained.
// Arrays are iterables. They can be used with a for of loop.

// Access O(1)
// Search O(n)

const array = [1, 2, 3, "item"];

array.push(4); // O(1)
array.unshift(0); //O(n)
array.pop(); // O(1)
array.shift(); // O(n)

for (const item of array) {
  console.log(item);
}

array.forEach((item, index) => {
  console.log(`Item at index ${index}: ${item}`);
});

// map O(n)
// Transforms each element in the array based on a provided function.

const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);  // Output: [1, 4, 9, 16]

// filter O(n)
// Filters elements of an array based on a condition.

const mixedNumbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = mixedNumbers.filter(num => num % 2 === 0);
console.log(evenNumbers);  // Output: [2, 4, 6]

// reduce O(n)
// Reduces the array to a single value by applying a function to each element.

const sum = mixedNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);  // Output: 21 (sum of all numbers)

// concat O(n)
// Combines two or more arrays into one.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = array1.concat(array2);
console.log(combinedArray);  // Output: [1, 2, 3, 4, 5, 6]

// slice O(n)
// Returns a shallow copy of a portion of the array into a new array.

const items = ['a', 'b', 'c', 'd', 'e'];
const slicedItems = items.slice(1, 4);
console.log(slicedItems);  // Output: ['b', 'c', 'd'] (index 1 to 3)

// splice O(n)
// Changes the contents of an array by removing, replacing, or adding elements.
const fruits = ['apple', 'banana', 'cherry', 'date'];
fruits.splice(2, 1, 'grape');  // Removes 'cherry' at index 2, adds 'grape'
console.log(fruits);  // Output: ['apple', 'banana', 'grape', 'date']
