/* function getCount(str) { // повернути кількість (число) голосних в рядку str
  let result = '';
  for (const char of str) {
    if ('aeiou'.includes(char)) { // приводимо всі символи до
      result += char;                           // нижнього реєстру
    }
  }
  return result.length;
} */

/* function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
} */