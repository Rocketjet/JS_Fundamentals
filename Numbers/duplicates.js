/* function duplicates(array) {
  if (array.length <= 1) {
    return 0;
  }
  var t = {};
  array.forEach(i => t[i] = (t[i] || 0) + 1);
  return Object.values(t).reduce((acc, p) => acc + Math.floor(p / 2), 0);

} */

/* function duplicates(array) {

  const newArray = array.sort((a, b) => a - b);
  
  if (newArray.length <= 1) return 0;

  let count = 0;

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] == newArray[i + 1]) {
      count++;
      i++;
    }
  }
  return count;
} */

// console.log(duplicates([1, 2, 5, 6, 5, 2]));