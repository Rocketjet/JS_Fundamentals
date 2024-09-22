/* function digital_root(n) {
  if (n < 10) return n;
  return digital_root(
    n.toString().split('').reduce((acc, d) => {
      return acc + +d;
    }, 0));
} */

/* function digital_root(n) {
  return (n - 1) % 9 + 1;    //return--n%9+1;
} */