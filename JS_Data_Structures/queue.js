// The queue data structure is a sequential collection of
// elements that follows the principle of First In First
// Out (FIFO).
// Queue is an abstract data type. It is defined by its
// behavior rather than being a mathematical model.
// The queue data structure supports two main operations:
// Enqueue - add an element to the tail of the collection.
// Dequeue - remove an element from the head of the collection.
// Queue usage: printers, CPU task scheduling, callback queue
// in JavaScript runtime.

// Queue Implementation

class Queue {
  constructor() {
    this.items = [];
  }

  // add an element (linear time complexity)
  enqueue(element) {
    this.items.push(element);
  }

  // remove the oldest element (linear time complexity)
  dequeue() {
    return this.items.shift();
  }

  // check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // get the value of the element at the front of the queue
  // without removing it
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  // get the number of elements
  size() {
    return this.items.length;
  }

  // visualize the elements
  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());

class QueueOptimised {
  constructor() {
    this.items = {}
    this.rear = 0
    this.front = 0
  }

  // add an element (constant time complexity)
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  // remove the oldest element (constant time complexity)
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  // check if the queue is empty
  isEmpty() {
    return this.rear - this.front === 0;
  }

  // get the value of the element at the front of the queue
  // without removing it
  peek() {
    return this.items[this.front];
  }

  // get the number of elements
  size() {
    return this.rear - this.front;
  }

  // visualize the elements
  print() {
    console.log(this.items);
  }
}

const queueOptimised = new QueueOptimised();
console.log(queueOptimised.isEmpty());

queueOptimised.enqueue(10);
queueOptimised.enqueue(20);
queueOptimised.enqueue(30);
console.log(queueOptimised.size());
queueOptimised.print();

console.log(queueOptimised.dequeue());
console.log(queueOptimised.peek());
