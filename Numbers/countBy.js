/* function countBy(x, n) {  // (2, 5) х - число, n - число повторень додавання
  const z = [];                      // х до результату попереднього обчислення
  let arr = [];

  for (let i = 1; i <= n; i++) {
    arr = +arr + x;
    z.push(arr);
  }

  return z;   // [2, 4, 6, 8, 10]
} */

/* function countBy(x, n) {
  const z = [];
  for (i = 1; i <= n; i++) {
      z.push(x * i);
  }
  return z;
} */