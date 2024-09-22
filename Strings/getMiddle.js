/* function getMiddle(s) { // You are going to be given a word. Your job is to return the middle character of the word.
                        // If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
  if (s.length % 2 == 0) {
    if (s.length == 2) {
      return s;
    } else {
      return s.slice(s.length / 2 - 1, s.length / 2 + 1);
    }
  }
  if (s.length % 2 !== 0) {
    if (s.length == 1) {
      return s;
    } else {
      return s.slice((Math.floor(s.length / 2)), (Math.floor(s.length / 2 + 1)));
    }
  }
} */

/* function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
} */