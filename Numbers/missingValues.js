/* const missingValues = (arr) => {
  const set = arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const sortedValue = Object.entries(set)
    .map((v) => [v[1], Number(v[0])])
    .sort((a, b) => a[0] - b[0]);

  return sortedValue[sortedValue.findIndex((v) => v[0] === 2)][1] *(sortedValue[sortedValue.findIndex((v) => v[0] === 1)][1] ** 2);
};
 */

/* function missingValues(a) {
  const x = a.find( v => a.filter( w => v===w ).length===1 );
  const y = a.find( v => a.filter( w => v===w ).length===2 );
  return x*x*y;
} */

function missingValues(arr) {
  //Question overview:
  // I am given an array of numbers.
  // In the array, every element appears three times, we don't want those.
  // For element that appears only once, set it to x
  // For element that appears only twice, set it to y
  // return x * x * y

  // High level strategy:
  let x, y;
  // Step 1: Put the elements into an object as a key with a counter as the value
  let object = arr.reduce((obj, currEl) => Object.assign(obj, { [currEl]: obj[currEl] + 1 || 1 }), {});
  // Step 2: Loop through the object and set whatever keys that appeared once and twice as x and y respectively
  for (const key in object) {
    if (object[key] === 1) x = +key;
    if (object[key] === 2) y = +key;
  }
  // Step 3: return x * x * y
  return x * x * y;
}

/* 
function missingValues(arr) {

  let obj = {};

  for (let i = 0; i < arr.length; i++) {

    if (obj[arr[i]]) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }


  }
  let x, y;
  for (key in obj) {
    if (obj[key] === 1) {
      x = key;
    } else if (obj[key] === 2) {
      y = key;
    }
  }

  //console.log(obj);
  return x * x * y;

} */

/* function missingValues(arr) {  //? https://medium.com/@kwang06/hashmaps-are-very-useful-152093285635
  let x;
  let y;
  let countNum = {};
  for (let i = 0; i < arr.length; i++) {
    if (!countNum[arr[i]]) {
      countNum[arr[i]] = 1;
    } else {
      countNum[arr[i]]++;
    }
  }
  //is an array of the keys in the countNum hash
  let keys = Object.keys(countNum);
  keys.forEach(num => {
    if (countNum[num] === 1) x = num;
    if (countNum[num] === 2) y = num;
  });
  return x * x * y;
} */
