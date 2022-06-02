var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.stackCount = 0;
};

Stack.prototype.size = function() {
  return this.stackCount;
}

Stack.prototype.push = function(value) {
  this[this.stackCount] = value;
  this.stackCount++;
}

Stack.prototype.pop = function() {
  if (this.stackCount > 0) {
    var result = this[this.stackCount - 1];
    delete this[this.stackCount - 1];
    this.stackCount--;
    return result;
  }
}

