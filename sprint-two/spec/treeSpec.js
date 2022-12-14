describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  // new test below

  it('should correctly detect children when there are many children', function() {
    tree.addChild(1);
    tree.addChild(2);
    tree.addChild(3);
    tree.addChild(4);
    tree.addChild(5);
    tree.addChild(6);
    tree.addChild(7);
    tree.addChild(8);
    tree.addChild(9);
    tree.addChild(10);
    tree.addChild(11);
    tree.addChild(12);
    expect(tree.contains(12)).to.equal(true);

  });
  //advanced tests

  it('should have a parent property', function() {
    tree.addChild(1);
    tree.children[0].addChild(2);
    expect(tree.children[0].children[0].parent.value).to.equal(1);
  });

  it('should have a removeFromParent method that dissociates the current tree from its parents in both directions', function() {
    expect(tree.removeFromParent).to.be.a('function');
    tree.addChild(1);
    var father = tree.children[0];
    father.addChild(2);
    var son = father.children[0];
    expect(tree.contains(1)).to.equal(true);
    expect(tree.contains(2)).to.equal(true);
    son.removeFromParent();
    expect(son.parent).to.equal(null);
    expect(father.children.length).to.equal(0);
    expect(tree.contains(2)).to.equal(false);


  });



});
