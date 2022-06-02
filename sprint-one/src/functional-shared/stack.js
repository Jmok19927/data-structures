var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackObject = {};
  stackObject.stackCount = 0;
  _.extend(stackObject, stackMethods);

  return stackObject;

};

var stackMethods = {};

stackMethods.size = function() {
  return this.stackCount;
};

stackMethods.push = function(value) {
  this[this.stackCount] = value;
  this.stackCount++;
};

stackMethods.pop = function() {
  if (this.stackCount > 0) {
    var result = this[this.stackCount - 1];
    delete this[this.stackCount - 1];
    this.stackCount--;
    return result;
  }
};

