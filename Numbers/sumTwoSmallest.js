/* function sumTwoSmallestNumbers(numbers) { // Sum of two lowest positive integers
  let ordered = numbers.sort(function (a, b) {
    return a - b;
  }); // ordered = (5) [5, 8, 12, 19, 22]
  let result = 0;

  for (let i = 0; i < ordered.length; i++) {
    if (i === 0) {
      result += ordered[0];
    }
    if (i === 1) {
      result += ordered[1];
    } // This solution sorts the array numerically, sets a constiable called ‘result’ to 0,
    // loops through the array to add the 0 i value to ‘result’, then adds the 1 i value to result.
  }
  return result; // [19, 5, 42, 2, 77], the output should be 7.
} */

/* function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers[0] + numbers[1];
} */