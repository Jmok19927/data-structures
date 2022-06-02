class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.stackCount = 0;
  }

  size() {
    return this.stackCount;
  }

  push(value) {
    this[this.stackCount] = value;
    this.stackCount++;
  }

  pop() {
    if (this.stackCount > 0) {
      var result = this[this.stackCount - 1];
      delete this[this.stackCount - 1];
      this.stackCount--;
      return result;
    }
  }

}