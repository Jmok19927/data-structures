var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var currentPosition = 0;
  var queueFront = 0;

  someInstance.enqueue = function(value) {
    storage[currentPosition] = value;
    currentPosition++;
  };

  someInstance.dequeue = function() {
    if (currentPosition - queueFront > 0) {
      var result = storage[queueFront];
      delete storage[queueFront];
      queueFront++;
      return result
    }
  };

  someInstance.size = function() {
    return currentPosition - queueFront;
  };

  return someInstance;
};
