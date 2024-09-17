// A set is a data structure that can hold a collection
// of values. The values however must be unique.
// Set can contain a mix of different data types.
// Sets are dynamically sized.
// Sets do not maintain an insertion order.
// Sets are iterables. They can be used with a for of loop.
// Searching and deleting an element in the set is faster
// compared to arrays.

const set = new Set([1, 2, 3]);

set.add(4);
set.add(4); // ignored as duplicate

console.log(set.has(4));

set.delete(3);

console.log(set.size);

for (const item of set) {
  console.log(item);
}

set.clear();
