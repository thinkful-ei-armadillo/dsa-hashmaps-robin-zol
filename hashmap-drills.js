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
  console.log('length', lor.length)
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
// 
}
main();