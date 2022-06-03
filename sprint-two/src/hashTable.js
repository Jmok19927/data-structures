

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) { // k = index? v = value?
  var index = getIndexBelowMaxForKey(k, this._limit);
  var object = {};
  object[k] = v;
// if there is no current object at index at all, put this object at that index
  // if (!this._storage.get(index)) {
  //   this._storage.set(index, object);
  // } else if (Object.keys(this._storage.get(index)[0]) === k){
  //   this._storage.set(index, object);
  // } else {
  //   while (this._storage.get(index)) {
  //     index++;
  //   }
  //   this._storage.set(index, v);
  // }

  if (this._storage.get(index) === undefined) {
    this._storage.set(index, object);
  } else {
    if (Object.keys(this._storage.get(index)[0]) === k) {
      this._storage.set(index, object);
    } else {
      while (this._storage.get(index)) {
        index++;
      }
      this._storage.set(index, object);
    }
  }


// if there IS an object at the index, check if k matches, if it does replace v
// if there is an object and k does not match, incredment index

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


