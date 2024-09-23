/* Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: 
"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"

*/

/* function spinWords(string){
  let result = [];
  const splitted = string.split(' ');
  
  splitted.forEach(el => {
    if (el.length >= 5) {
      result.push(el.split('').reverse().join(''))
    } else result.push(el);
  })
  
  return result.join(' ');
} */

/* function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
} */

/* function spinWords(string){
  return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
} */

/*
function spinWords(str){
  return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');
} */

/* function spinWords(str){
  return str.split(' ').map(spinSingleWord).join(' ');
}

function spinSingleWord(word){
  return word.length>4 ? word.split('').reverse().join('') : word;
} */
