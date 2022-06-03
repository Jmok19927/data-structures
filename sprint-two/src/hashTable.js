

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) { // k = index? v = value?
  var index = getIndexBelowMaxForKey(k, this._limit);
  var object = {}; // can prob turn this into a tuple array instead if we cared
  object[k] = v;

  if (this._storage.get(index) === undefined) {
    this._storage.set(index, object);
  } else {
    if (Object.keys(this._storage.get(index))[0] === k) { // changed [0] to be outside of object keys fixing undefined issue
      this._storage.set(index, object);
    } else {
      while (this._storage.get(index)) {
        index++;
      }
      this._storage.set(index, object);
    }
  }


// if there IS an object at the index, check if k matches, if it does replace
// if there is an object and k does not match, incredment index

};

HashTable.prototype.retrieve = function(k) {
  // need to add a check if this._storage.get(index) exists
  var index = getIndexBelowMaxForKey(k, this._limit);
  // need to increment the index until we find the matching key if the first key does not match
  if (this._storage.get(index)) {
    while (Object.keys(this._storage.get(index))[0] !== k) {
      index++;
    }
    return this._storage.get(index)[k];
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  while (Object.keys(this._storage.get(index))[0] !== k) {
    index++;
  }
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


