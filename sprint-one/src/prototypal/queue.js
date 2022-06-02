var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.front = 0;
  newQueue.back = 0;

  return newQueue
};

var queueMethods = {};

queueMethods.size = function() {
  return this.back - this.front;
}

queueMethods.enqueue = function(value) {
  this[this.back] = value;
  this.back++;
}

queueMethods.dequeue = function() {
  if (this.back > this.front) {
    var result = this[this.front];
    delete this[this.front];
    this.front++;
    return result
  }
}


