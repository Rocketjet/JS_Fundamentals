/* function highAndLow(numbers) { // "1 9 3 4 -5" (повернути найбільше і найменше )
  const arr = numbers.split(' ');
  let max = arr[0], min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) > max) {
      max = arr[i];
    }
    if (parseInt(arr[i]) < min) {
      min = arr[i]
    }
  }
  const result = max + ' ' + min;
  return result;  // 9 -5
} */

/* function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
} */