var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueObject = {};
  queueObject.queueFront = 0;
  queueObject.queueBack = 0;
  _.extend(queueObject, queueMethods);

  return queueObject;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.queueBack - this.queueFront;
}

queueMethods.enqueue = function(value) {
  this[this.queueBack] = value;
  this.queueBack++;
}

queueMethods.dequeue = function() {
  if (this.queueBack > this.queueFront) {
    var result = this[this.queueFront];
    delete this[this.queueFront];
    this.queueFront++;
    return result
  }
}


