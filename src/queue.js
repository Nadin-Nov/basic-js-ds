const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.start = null;
    this.size = 0;
  }

  getUnderlyingList() {
    return this.start;
  }

  enqueue(value) {
    const newElement = new ListNode(value);

    if (this.size === 0) {
      this.start = newElement;
      this.end = newElement;
    } else {
      this.end.next = newElement;
      this.end = newElement;
    }
    this.size += 1;
  }

  dequeue() {
    if (this.size === 0) {
      throw new Error('Queue is empty');
    }
    const removedValue = this.start.value;
    this.start = this.start.next;
    if (this.start === null) {
      this.end = null;
    }
    this.size -= 1;
    return removedValue;
  }
}

module.exports = {
  Queue
};
