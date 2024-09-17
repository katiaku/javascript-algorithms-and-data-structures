// The stack data structure is a sequential collection
// of elements that follows the principle of Last In First Out
// (LIFO). The last element inserted into the stack is the first
// to be removed.
// Stack is an abstract data type. It is defined by its behavior
// rather than being a mathematical model.
// The stack data structure supports two main operations:
// Push, which adds an element to the collection.
// Pop, which removes the most recently added element from the
// collection.
// Stack usage: browser history tracking, undo operation when typing,
// expression conversions, call stack in JavaScript runtime.

class Stack {
  constructor() {
    this.items = []; // Array to store stack elements
  }

  // Push operation to add element to the stack
  push(element) {
    this.items.push(element); // Add element to the end of the array (top of the stack)
  }

  // Pop operation to remove and return the top element of the stack
  pop() {
    if (this.isEmpty()) {
      return "Underflow"; // Stack is empty, return an underflow message
    }
    return this.items.pop(); // Remove and return the last element (top of the stack)
  }

  // Peek operation to return the top element without removing it
  peek() {
    if (this.isEmpty()) {
      return "No elements in Stack"; // Stack is empty
    }
    return this.items[this.items.length - 1]; // Return the last element
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Print the elements of the stack
  printStack() {
    return this.items.join(' '); // Join elements with a space separator
  }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Stack:", stack.printStack()); // Output: 10 20 30

console.log("Popped element:", stack.pop()); // Output: 30
console.log("Stack after pop:", stack.printStack()); // Output: 10 20

console.log("Peek element:", stack.peek()); // Output: 20

