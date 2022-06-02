var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.front = 0;
  this.back = 0;

};

Queue.prototype.size = function() {
  return this.back - this.front;
}

Queue.prototype.enqueue = function(value) {
  this[this.back] = value;
  this.back++;
}

Queue.prototype.dequeue = function() {
  if (this.back - this.front > 0) {
    var result = this[this.front];
    delete this[this.front];
    this.front++;
    return result;
  }
}

