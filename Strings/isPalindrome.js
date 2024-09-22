/* function palindrome(string) {
  const re = /[^A-Za-z0-9]/g;
  str = string.toLowerCase().replace(re, '');
  const len = str.length;
  for (const i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
} */

/* function palindrome(str) {
  const re = /[\W_]/g;
  const lowRegStr = str.toLowerCase().replace(re, '');
  const reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
} */