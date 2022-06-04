var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = Tree(value);
  this.children.push(childTree);
  childTree.parent = this;
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

treeMethods.removeFromParent = function() {
  //if parent is not null
  if (this.parent !== null) {
    var index = this.parent.children.indexOf(this);
    this.parent.children.splice(index, 1);
    this.parent = null;
  }
    //access parents children array with this.parent.children
    //find index of this inside the children array
    //remove with splice(index,1)
    //then disconnect this.parent = null




};



/*
 * Complexity: What is the time complexity of the above functions?
 */
