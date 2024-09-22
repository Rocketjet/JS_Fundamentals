/* const firstLetterCaps = (str) => {

  return str.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
}; */

/* function firstLetterCaps(str) {
  const splits = str.split(" ");  // splits = (4) ["How", "are", "you", "doing"]
  const result = "";

  for (let i = 0; i < splits.length; i++) {
    let word = splits[i];  // "How"
    let first = word.substring(0, 1).toUpperCase();  // "H"
    let leftovers = word.substring(1, word.length);  // "ow"
    result += first + leftovers + " ";  // "How "
  }
  return result;
} */