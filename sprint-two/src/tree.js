var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = Tree(value);
  this.children.push(childTree);
};

treeMethods.contains = function(target) {
  var hasTarget = false;
  var checkTarget = function(currentTree) {
    if (currentTree.value === target) {
      hasTarget = true;
    }
    if (currentTree.children.length !== 0) {
      currentTree.children.forEach(function(ele) {
        checkTarget(ele);
      });
    }
  }
  checkTarget(this);
  return hasTarget;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
