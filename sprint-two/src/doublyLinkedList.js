var DoublyLinkedList = function() {
  var doubleList = Object.create(listMethods);
  doubleList.head = null;
  doubleList.tail = null;
  return doubleList;
};


var listMethods = {};

//adds value to the tail of the list
listMethods.addToTail = function(value) {
  //create a new node with the input value
  var newNode = DoubleNode(value);
  //if head exists
  if (this.head !== null) {
    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
  } else {
    this.head = newNode;
    this.tail = newNode;
  }
    //take the current tail, point tail.next to the new node
    //take the new node, point newNode.previous to the current tail
    //set the doubleList.tail to the new node
  //if head doesn't exist
    //set the head of the list to the new node
    //set the tail of the list to the new node

};

listMethods.removeHead = function() {
  if (this.head !== null) {
    var oldHead = this.head;
    this.head = oldHead.next;
    if (oldHead.next !== null) {
      this.head.previous = null;
    }
    return oldHead.value;
  }
  //take head node
  //if head node has a next
    //set list.head to list.head.next
    //on the new list.head set previous to null
};

listMethods.contains = function(value) {
  //returns a boolean
  var currentNode = this.head;
  while (currentNode !== null) {
    if (currentNode.value === value) {
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
};

listMethods.addToHead = function(value) {
  //adds the input value to the front of the list
  //create a doublenode with value;
  var newHead = DoubleNode(value);
  if (this.head !== null) {
    newHead.next = this.head;
    this.head.previous = newHead;
  } else {
    this.tail = newHead;
  }
  this.head = newHead;
  //check if there even is a current head
  //point newHead.next to this.head
  //point this.head.previous to newHead
  //set this.head to newHead


};

listMethods.removeTail = function() {
  //removes the tails from the list
  //if there even is a current tail
  var currentTail = this.tail;
  if (currentTail !== null) {
    this.tail = currentTail.previous;
    currentTail.previous.next = null;
    return currentTail.value;
  }
    //if current tail has a previous
      //list.tail = currentTail.previous
      //set currentTail.previous.next = null

};



var DoubleNode = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};