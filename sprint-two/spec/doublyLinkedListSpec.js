describe('doublyLinkedList', function() {
  var doubleLinkedList;

  beforeEach(function() {
    doubleLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doubleLinkedList).to.have.property('head');
    expect(doubleLinkedList).to.have.property('tail');
  });

  it('should have methods "addToHead" and "removeTail"',
  function() {
    expect(doubleLinkedList.addToHead).to.be.a('function');
    expect(doubleLinkedList.removeTail).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    doubleLinkedList.addToTail(4);
    expect(doubleLinkedList.tail.value).to.equal(4);
    doubleLinkedList.addToTail(5);
    expect(doubleLinkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doubleLinkedList.addToTail(4);
    doubleLinkedList.addToTail(5);
    expect(doubleLinkedList.head.value).to.equal(4);
    doubleLinkedList.removeHead();
    expect(doubleLinkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead in called', function() {
    doubleLinkedList.addToTail(4);
    doubleLinkedList.addToTail(5);
    expect(doubleLinkedList.removeHead()).to.equal(4);
  });

  it('should return true or false if the inputted value exists within the list', function() {
    doubleLinkedList.addToTail(4);
    doubleLinkedList.addToTail(5);
    doubleLinkedList.addToTail(6);
    expect(doubleLinkedList.contains(5)).to.equal(true);
    expect(doubleLinkedList.contains(7)).to.equal(false);
  });

  // tests for new methods
  //addToHead
  it('should take a value and add it to the front of the list', function() {
    doubleLinkedList.addToTail(4);
    doubleLinkedList.addToTail(5);
    expect(doubleLinkedList.head.value).to.equal(4);
    doubleLinkedList.addToHead(3);
    expect(doubleLinkedList.head.value).to.equal(3);
  });

  // removeTail
  it('should remove the tail from the list when removeTail is called', function() {
    doubleLinkedList.addToTail(4);
    doubleLinkedList.addToTail(5);
    expect(doubleLinkedList.tail.value).to.equal(5);
    doubleLinkedList.removeTail();
    expect(doubleLinkedList.tail.value).to.equal(4);
  });

  it('should return the value of the former tail when removeTail is called', function() {
    doubleLinkedList.addToTail(4);
    doubleLinkedList.addToTail(5);
    expect(doubleLinkedList.removeTail()).to.equal(5);
  });

  it('node should have a previous property that points to the previous node', function() {
    doubleLinkedList.addToTail(4);
    doubleLinkedList.addToTail(5);
    doubleLinkedList.addToTail(6);
    expect(doubleLinkedList.tail.previous.value).to.equal(5);
    expect(doubleLinkedList.tail.previous.previous.value).to.equal(4);
  });

  it('should not remove head or take any action if the list is empty', function() {
    expect(doubleLinkedList.removeHead()).to.equal(undefined);
  })


})

