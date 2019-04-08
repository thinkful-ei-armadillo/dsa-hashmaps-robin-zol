class HashMap {
  constructor(initialCapacity=8) {
    this.length = 0;
    this._hashTable = [];
    this._capacity = initialCapacity;
    this._deleted = 0;
    this.SIZE_RATIO = 3;
    this.MAX_LOAD_RATIO = 0.5;
  }
  get(key) {// gets key then returns the value
    const index = this._findSlot(key);
    if (this._hashTable[index] === undefined) {
      throw new Error('Key error');
    }
    return this._hashTable[index].value;
  }

  set(key, value){
    const loadRatio = (this.length + this._deleted + 1) / this._capacity;
    if (loadRatio > HashMap.MAX_LOAD_RATIO) {// compare sizes then if it is more resize the hash
      this._resize(this._capacity * HashMap.SIZE_RATIO);
    }
    //Find the slot where this key should be in
    const index = this._findSlot(key);

    if(!this._hashTable[index]){
      this.length++; // if nothing is there then adds length
    }
    this._hashTable[index] = { //reassign
      key,
      value,
      DELETED: false
    }; 
  }

  delete(key) {
    const index = this._findSlot(key);
    const slot = this._hashTable[index]; //grabs the data
    if (slot === undefined) {
      throw new Error('Key error');
    }
    slot.DELETED = true; //
    this.length--;
    this._deleted++;
  }

  _findSlot(key) {
    const hash = HashMap._hashString(key);//makes key into hash
    const start = hash % this._capacity; //finds index from hash
                        
    for (let i=start; i<start + this._capacity; i++) {//loops through where key should be and if not found goes to next
      const index = i % this._capacity; // makes sure it loops through all the indexs
      const slot = this._hashTable[index];
      if (slot === undefined || (slot.key === key && !slot.DELETED)) {
        return index;// returns the actual data {key, value, deleted}
      }
    }
  }

  _resize(size) {
    const oldSlots = this._hashTable; //makes a copy of hashtable// array of data
    this._capacity = size;  //changes the capacity AKA the array size to new size
    // Reset the length - it will get rebuilt as you add the items back// initials the table to empty
    this.length = 0;
    this._deleted = 0;
    this._hashTable = [];

    for (const slot of oldSlots) {//loops and re adds the data
      if (slot !== undefined && !slot.DELETED) {
        this.set(slot.key, slot.value);
      }
    }
  }

  static _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      //Bitwise left shift with 5 0s - this would be similar to
      //hash*31, 31 being the decent prime number
      //but bit shifting is a faster way to do this
      //tradeoff is understandability
      hash = (hash << 5) + hash + string.charCodeAt(i);
      //converting hash to a 32 bit integer
      hash = hash & hash;
    }
    //making sure has is unsigned - meaning non-negtive number. 
    return hash >>> 0;
  }
}
module.exports = {HashMap};