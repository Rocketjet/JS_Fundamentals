/* function findShort(s){ // "bitcoin take over the world" (повернути довжину (number) найменшого слова
  const spl = s.split(' ');
  let min = spl[0].length;
  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length < min) {
      min = spl[i].length;
    }
  }
  return min;
} */

/* function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
} */