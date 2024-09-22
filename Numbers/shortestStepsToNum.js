/* function shortestStepsToNum(num) {
  let steps = 0
  while (num > 1) {
    num % 2 == 0 ? num /= 2 : num--
    steps++
  }
  return steps
} */


/* function shortestStepsToNum(num) {

  if (num < 3)
    return num - 1;

  let next = num % 2 ? num - 1 : num / 2;

  return 1 + shortestStepsToNum(next);

} */