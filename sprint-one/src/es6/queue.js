class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.front = 0;
    this.back = 0;
  }

  size() {
    return this.back - this.front;
  }

  enqueue(value) {
    this[this.back] = value;
    this.back++;
  }

  dequeue() {
    if (this.back > this.front) {
      var result = this[this.front];
      delete this[this.front];
      this.front++
      return result;
    }
  }


}
