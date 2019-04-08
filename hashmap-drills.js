const {HashMap} = require('./hashmaps');

function main(){
  const lor = new HashMap();

  const lorC = [{'Hobbit': 'Bilbo'}, {'Hobbit': 'Frodo'},
    {'Wizard': 'Gandolf'}, {'Human': 'Aragon'}, {'Elf': 'Legolas'}, {'Maiar': 'The Necromancer'},
    {'Maiar': 'Sauron'}, {'RingBearer': 'Gollum'}, {'LadyOfLight': 'Galadriel'}, {'HalfElven': 'Arwen'},
    {'Ent': 'Treebeard'}];
  lorC.forEach(obj => { 
    for(let key in obj)
      lor.set(key, obj[key]);
  });
  lorC.forEach(obj =>{
      for(let key in obj)
      console.log(`${key}`, lor.get(key));
  });
  console.log('capacity', lor._capacity);
  console.log('length', lor.length);
  console.log('hashtable', lor._hashTable);
  console.log('size ratio', lor.SIZE_RATIO);
//   Print your hash map and notice the length and items that are hashed in your hash map. Have you hashed all the items you were asked to?
//  yes but as you have the same key it would overwrite the previous data

// Retrieve the value that is hashed in the key "Maiar" and Hobbit.
//   What are the values of Maiar and Hobbit that you have? Is there a discrepancy? Explain your answer.
// 
//it prints out the more recent hashed data into that key.
// Maiar prints out Sauron, and Hobbit prints out Frodo. it prints out
//   
//What is the capacity of your hash table after you have hashed all the above items? Explain your answer.
// the capacity right now is 24 because when the ratio hits have we multiple the capacity by 3 and it will resize once it hits half of max capacity agian

}
const WhatDoesThisDo = function(){
  // both sets of hashmap gives out the last value that it sets because they both have the same key.
  let str1 = 'Hello World.'; 
  let str2 = 'Hello World.'; 
  let map1 = new HashMap();   [str1, str2]
  map1.set(str1,10);
  map1.set(str2,20);

  let map2 = new HashMap(); []
  let str3 = str1;
  let str4 = str2;
  map2.set(str3,20);
  map2.set(str4,10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};
//
console.log('do', WhatDoesThisDo());
// main();

//1) Show your hash map after the insertion of keys 10, 22, 31, 4, 15, 28, 17, 88, 59 
// into a hash map of length m = 11 using open addressing and a hash function k mod m.
//  | 88  | 10 | 22|   | 4   | 15  | 28  | 17  | 31  | 59 |  |  capacity should be 33 now cause we past half way

//2) Show your hash map after the insertion of the keys 5, 28, 19, 15, 20, 33, 12, 17, 10
// into the hash map with collisions resolved by separate chaining. Let the hash table have a 
// length m = 9, and let the hash function be k mod m.
 //   |    |     |  20 |     | 5   | 33  |  15 |  17 |   | capacity will be 27 after the 5th set
 //         | 19|      | 28 |
 //          |10|      | 12  |
 //

//  4. Remove duplicates
// Implement a function to delete all duplicated characters 
// in a string and keep only the first occurrence of each character. 
// For example, if the input is string “google”, the result after deletion is “gole”. 
// Test your program with a sentence as well such as "google all that you think can think of".
