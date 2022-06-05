var BinarySearchTree = function(value) {
  var newBSTree = Object.create(binaryMethods);
  newBSTree.value = value;
  newBSTree.left = null;
  newBSTree.right = null;

  return newBSTree;

};

var binaryMethods = {};

binaryMethods.insert = function(value) {
  // no return, just inserts
  var current = new BinarySearchTree(value);
  if (value < this.value) {
    if (this.left === null) {
      this.left = current;
    } else {
      this.left.insert(value);
    }
  }

  if (value > this.value) {
    if (this.right === null) {
      this.right = current;
    } else {
      this.right.insert(value);
    }
  }
};

binaryMethods.contains = function(value) {
  // set base return to false
  var bool = false;
  //input a value
  var checkValue = function(node) {
    if (node === null) {
      return;
    }
    if (node.value === value) {
      bool = true;
    }

    if (value > node.value) {
      checkValue(node.right);
    } else {
      checkValue(node.left);
    }
  }
  checkValue(this);
  return bool;
  //check current node value if its equals value
  //if === return true
  //else check left and right node //else
  // if left and right node are both null
  //return false
};

binaryMethods.depthFirstLog = function(cb) {
  //executes cb on every value in the tree
  // for the current node: cb.apply(this, arguments)
  //if left/right isnt null run cb.apply on left/right
  // stops when left and right are both null
  if (this !== null) {
    cb(this.value);
  }

  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }

  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
