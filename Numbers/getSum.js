// Given two integers a and b, which can be positive or negative, find the sum of all the integers
// between and including them and return it. If the two numbers are equal return a or b.

/* function getSum(a, b) { // знайти суму чисел від а до b
  let max = Math.max(a, b),  //знаходимо найбільше
      min = Math.min(a, b);  // знаходимо найменше
  let result = 0;
  for (min; min <= max; min++) {  // робимо перебір від min до max
    result += min;                // додаємо до result число з min кожної ітерації
  }
  return result;
} */

/* function getSum(a, b)
{
  return (Math.abs(a - b) + 1) * (a+b) / 2;
} */

/* function getSum(a, b) {
  res = 0;

  if (a < b)
    while (a <= b) res += a++;
  else
    while (a >= b) res += a--;

  return res;
} */