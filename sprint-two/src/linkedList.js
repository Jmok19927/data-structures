var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (list.tail !== null) {
      list.tail.next = newNode;
      list.tail = newNode;
    } else {
    list.tail = newNode;
    }
    if (list.head === null) { //setting a head if there is no nodes in the list
    list.head = newNode;
    }
  };

  list.removeHead = function() {
    var result = list.head.value; // take value from current head
    list.head = list.head.next; // set head to the next value
    return result; // return previous head's value
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
