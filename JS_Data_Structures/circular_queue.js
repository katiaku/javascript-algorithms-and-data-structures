// The size of the queue is fixed and a single block
// of memory is used as if the first element is
// connected to the last element.
// Also referred to as circular buffer or ring buffer
// and follows the FIFO principle.
// A circular queue will reuse the empty block
// created during the dequeue operation.
// Circular queue usage: clock, streaming data, traffic
// lights.

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.tail = -1;
    this.head = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.tail = (this.tail + 1) % this.capacity;
      this.items[this.tail] = element;
      this.currentLength += 1;
      if (this.head === -1) {
        this.head = this.tail;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.head];
    this.items[this.head] = null;
    this.head = (this.head + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.head = -1;
      this.tail = -1;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.head];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.head; i !== this.tail; i = (i + 1) % this.capacity) {
        str += this.items[i] + "";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const queue = new CircularQueue(5);
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log(queue.isFull());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());
queue.print();
queue.enqueue(60);
queue.print();
