/* const singleNumber = function (arr) {
  const temp = {};

  for (const num of arr) {
    temp[num] = temp[num] + 1 || 1;
  }

  for (const key in temp) {
    if (temp[key] === 1) {
      return key;
    }
  }
} */


/* const singleNumber = function (arr) {
  return arr.reduce( (a, b) => a ^ b);
}

console.log(singleNumber([2, 1, 2, 1, 4])); */