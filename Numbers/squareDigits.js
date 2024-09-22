/* function squareDigits(num) { // 3212
  let result = '';
  const str = num.toString();
  for (let i of str) {
    result += i * i;
  }
  return +result; // 9414
} */

/* function squareDigits(num){
  const string = num.toString();  // "3212"
  let results = [];
  for (let i = 0; i < string.length; i++){
      results[i] = string[i]**2;  // results = (4) [9, 4, 1, 4]
  }
  return Number(results.join('')); // !!! join перетворює масив в рядок "9414", Number назад в число
} */

/* function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
} */