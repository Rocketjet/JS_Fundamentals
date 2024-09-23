function duplicateCount(text) {
  let miniArr = text.toLowerCase().split(''); //*['i','n','d','i','v','i','s','i','b','i','l','i','t','y']

  let alreadyFound = [],
    counter = 0;

  for (let i = 0; i < miniArr.length; i++) {
    let sliced = miniArr.slice(0, i);

    if (alreadyFound.includes(miniArr[i])) {
      i++;
      continue;
    } else if (sliced.includes(miniArr[i])) {
      alreadyFound.push(miniArr[i]);
      counter++;
    }
  }
  return counter;
}

/* 
function duplicateCount(text) {
    const map = new Map();
    for (const char of text) {
        map.set(char, map.has(char));
    }
    let count = 0;
    for (const {1: value} of map) {
        if (value) count++;
    }
    return count;
}

А в декларативному — ось такий:

function duplicateCount(text) {
    const map = Array.from(text).reduce(
        (map, char) => map.set(char, map.has(char)),
        new Map()
    );
    map.forEach((value, key, map) => {
        !value && map.delete(key);
    });
    return map.size;
}
*/

/* function duplicateCount(text){
  return new Set(text.toLowerCase().match(/(.)(?=.*\1)/gi)).size
} */

/* function duplicateCount(text){
  var count = text.toLowerCase().split('').reduce((accum, curr) => {
    accum[curr] ? accum[curr] += 1 : accum[curr] = 1;
    return accum;
  }, {});
  return Object.keys(count).filter(key => count[key] > 1).length;
} */

/* function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
} */

/* function duplicateCount(text){
  const lower = text.toLowerCase();
  const count = 0;
  const used = [];

  lower.split('').forEach(function(letter) {
    if (!used.includes(letter) && (lower.split(letter).length - 1) > 1) {
      count++;
      used.push(letter);
    }
  });

  return count;
} */

/* const duplicateCount = (string) => {
    
    // makes an array all lowercase and sorts the array in alpha order for easy comparison
    let newString = string.toLowerCase().split('').sort();
    
    // this array will house the duplicated values so we can 
    // get the length of it (or the number of duplicated characters). 
    let newArray = []
    
    // set a loop for the array
    for(i = 0; i < newString.length; i++){
       // if the current element equals the following element the push it to the new array AND
       // ONLY if the new array doesn't already include the current element
       if(newString[i] === newString[i + 1] && !newArray.includes(newString[i])){
           // push elements to new array
           newArray.push(newString[i])
       }
    }
    // return the number of elements in the array to represent the number characters that were duplicated
    return newArray.length
} */
