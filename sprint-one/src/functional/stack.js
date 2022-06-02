var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
  };

  var stackCount = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[stackCount] = value;
    stackCount++;
  };

  someInstance.pop = function() {
    if (stackCount > 0) {
      var result = storage[stackCount - 1];
      delete storage[stackCount - 1];
      stackCount--;
      return result;
    }

  };

  someInstance.size = function() {
    return stackCount;
  };

  return someInstance;
};
