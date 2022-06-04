

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._numItems = 0;
};

HashTable.prototype.insert = function(k, v) { // k = index v = value
  var index = getIndexBelowMaxForKey(k, this._limit);
  console.log('index: ' + index + ', person: ' + k + v);
  var tuple = [k, v];
  // var object = {}; // can prob turn this into a tuple array instead if we cared
  // object[k] = v;


  if (this._storage.get(index) === undefined) {
    this._storage.set(index, tuple);
  } else {
    // if (Object.keys(this._storage.get(index))[0] === k) {
    if (this._storage.get(index)[0] === k) {
      this._storage.set(index, tuple);

    } else {
      while (this._storage.get(index)) {
        index++;
        if (index >= this._limit) {
          index = 0;
        }
      }
      this._storage.set(index, tuple);
    }
  }
  this._numItems++;
  console.log('storage: ' + this._storage.print());

  //will call the resize function if our hashTable is >75% filled, which will double the size of our storage
  if (this._numItems / this._limit > .75) {
    console.log('function has reached the if statement');
    this.resize(2);
  }

  console.log('storage after resize: ' + this._storage.print());

  //first thing figure out current 'space' taken up in limited array
  //maybe a counter for each object we put in
  //if counter is 75% make bigger array, call insert on each
  //make a helper function reorganize that will call insert for each element in limited array into the new array
  //if counter is less than 25% && > 8 halve the array, call insert for each element from old array into new array


// if there IS an object at the index, check if k matches, if it does replace
// if there is an object and k does not match, incredment index

};

HashTable.prototype.retrieve = function(k) {
  // need to add a check if this._storage.get(index) exists
  var index = getIndexBelowMaxForKey(k, this._limit);
  // need to increment the index until we find the matching key if the first key does not match
  if (this._storage.get(index)) {

    while (this._storage.get(index)[0] !== k) {
      index++;
      if (index >= this._limit) {
        index = 0;
      }
      if (this._storage.get(index) === undefined) {
        return undefined;
      }
    }
    return this._storage.get(index)[1];
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
    while (this._storage.get(index)[0] !== k) {
      index++;
      if (index >= this._limit) {
        index = 0;
      }
    }
  }
  this._storage.set(index, undefined);
  this._numItems--;
};

HashTable.prototype.resize = function(multiplier) {
  //created a copy of the old storage / elements
  //created the new limit
  //create a new storage of the new limit size
  var storageCopy = this._storage;
  var newLimit = this._limit * multiplier;
  this._limit = newLimit;
  var newStorage = LimitedArray(newLimit);
  this._storage = newStorage;
  console.log('newLimit: ' + newLimit + ', this._limit: ' + this._limit);

  //for each of the existing elements within old storage
    //create a new index for them within the new storage bounds
    //insert them into the new storage container

  storageCopy.each(function(ele) {
    if (ele !== undefined) {
      var index = getIndexBelowMaxForKey(ele[0], newLimit);
      console.log('in the for each statement - index: ' + index);
      console.log(index, ele[1]);
      newStorage.set(index, ele[1]);
    }

  });
  // console.log('new storage: ' + newStorage.print());
  // console.log('new limit: ' + newLimit);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


