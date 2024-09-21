// An object is an unordered collection of key-value pairs.
// the key must either be a string or symbol data type 
// where as the value can be of any data type.
// To retrieve a value, you can use the corresponding key.
// This can be achieved using the dot notation or bracket
// notation.
// An object is not an iterable. You cannot use it with a
// for of loop.

const obj = {
  name: "John",
  age: 30,
  "access-key": true,
  sayMyName: function () {
    console.log(this.name);
  }
}

obj.hobby = "reading";
delete obj.hobby;

console.log(obj);
console.log(obj.name);
console.log(obj["age"]);
console.log(obj["access-key"]);

// Object.keys()
// Returns an array of a given object's own property keys (property names).
const car = { make: 'Toyota', model: 'Corolla', year: 2020 };
console.log(Object.keys(car));
// Output: ['make', 'model', 'year']

// Object.values()
// Returns an array of a given object's own property values.
console.log(Object.values(car));
// Output: ['Toyota', 'Corolla', 2020]

// Object.entries()
// Returns an array of a given object's own enumerable property [key, value] 
// pairs in the form of arrays.
console.log(Object.entries(car));
// Output: [['make', 'Toyota'], ['model', 'Corolla'], ['year', 2020]]

// Insert - O(1)
// Remove - O(1)
// Access - O(1)
// Search - O(n)
// Object.keys(), Object.values(), Object.entries() - O(n)
