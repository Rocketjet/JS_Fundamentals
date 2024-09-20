/* function duplicateCount(text) {

  let miniArr = text.toLowerCase().split("");  //*['i','n','d','i','v','i','s','i','b','i','l','i','t','y']

  let alreadyFound = [],
      counter = 0;

  for (let i = 0; i < miniArr.length; i++) {

    let sliced = miniArr.slice(0, i);

    if (alreadyFound.includes(miniArr[i])) {
      i++;
      continue;
    } else if (sliced.includes(miniArr[i])) {
      alreadyFound.push(miniArr[i]);
      counter++;
    }

  }
  return counter;
} */

/* function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
} */

/* function duplicateCount(text){
  const lower = text.toLowerCase();
  const count = 0;
  const used = [];

  lower.split('').forEach(function(letter) {
    if (!used.includes(letter) && (lower.split(letter).length - 1) > 1) {
      count++;
      used.push(letter);
    }
  });

  return count;
} */