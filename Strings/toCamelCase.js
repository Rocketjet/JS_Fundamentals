/* Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples:

"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/

/* function toCamelCase(str) {
  return str
    .split(/[-_]/) // Split the string by dash or underscore
    .map((word, index) => {
      // Capitalize the first letter of each word except the first word
      if (index === 0) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(''); // Join the words back together
} */

// console.log(toCamelCase('the-stealth-warrior'));

function toCamelCase(s) {
  const str = s.split('');
  console.log(str)
  return str
    .map((el, i) => {
      if (el === '-' || el === '_') {
        el = str[i + 1].toUpperCase();
        str.splice([i + 1], 1);
      }
      return el;
    })
    .join('');
}

// Examples
console.log(toCamelCase('the-stealth-warrior')); // "theStealthWarrior"
console.log(toCamelCase('The_Stealth_Warrior')); // "TheStealthWarrior"
console.log(toCamelCase('The_Stealth-Warrior')); // "TheStealthWarrior"

/* function toCamelCase(str){
  return str.split(/-|_/g).map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)).join('');
} */

/* function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
} */

/* function toCamelCase(str){
  return str.split(/\-|_/).reduce(function(previous, current, index){ return camelize(previous, current, index);});
}

function camelize(previous, current, index){
  return previous + current.capitalizeFirstLetter();
}

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}*/

/* function toCamelCase(str){
  if (str.length === 0) return str;
  let firstUpperCase = false;
  let res = "";

  if (str[0] === str[0].toUpperCase()) firstUpperCase = true;

  let arrStr = str.split(/-|_/)

  for (let i = 0; i < arrStr.length; i++) {
    if (i===0 && !firstUpperCase) {
      res += arrStr[i];
    } else {
      res += capitilizeFirstLetter(arrStr[i]);
    }
  }
  
  return res;
}

function capitilizeFirstLetter (string) {
  return string[0].toUpperCase() + string.slice(1)
} */
