// A map is a collection of key-value pairs.
// It strictly preserves the insertion order of keys, 
// regardless of whether they are strings, numbers, or 
// objects.
// Both keys and values can be of any data type.
// To retrieve a value, you can use the corresponding key.
// Maps are iterables. They can be used with a for of loop.
// Maps are restricted to just storing data (no functionality
// attached).

const map = new Map([["a", 1], ["b", 2]]);

map.set("c", 3);
map.delete("c");

console.log(map.has("a"));
console.log(map.size);

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

map.clear();
