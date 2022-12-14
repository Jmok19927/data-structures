// Instantiate a new graph
var Graph = function() {
  this.nodes = {}; // empty object
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {};
  this.nodes[node][node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes[node] !== undefined) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // technically adding the node back in would keep its edges
  // fix in future to remove the edge reference
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode] && this.nodes[toNode]){
    if (this.nodes[fromNode][toNode] && this.nodes[toNode][fromNode]) {
      return true;
    }
  }
  // if (this.nodes[fromNode][toNode] && this.nodes[toNode]) { // technically adding the node back in would keep its edges, fix in remove node
  //   return true;
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode][toNode] = toNode;
  this.nodes[toNode][fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let key in this.nodes) {
    let nodeValue = this.nodes[key][key];
    cb(nodeValue);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


