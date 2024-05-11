/* Здесь мы определили функцию makeAdder(x), которая получает единственный аргумент x и возвращает новую функцию.
Эта функция получает единственный аргумент y и возвращает сумму x и y.

По существу makeAdder — это фабрика функций: она создаёт функции, которые могут прибавлять определённое значение
к своему аргументу. В примере выше мы используем нашу фабричную функцию для создания двух новых функций — одна
прибавляет 5 к своему аргументу, вторая прибавляет 10.

add5 и add10 — это примеры замыканий. Эти функции делят одно определение тела функции, но при этом они
сохраняют различные окружения. В окружении функции add5 x — это 5, в то время как в окружении add10 x — это 10. */

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
};

var add5 = makeAdder(5); //? в add5 зберігатиметься посилання на анонімну фу-цію function(y) і її лексичне оточення, в якому х=5
var add10 = makeAdder(10); //? в add10 зберігатиметься посилання на анонімну фу-цію function(y) і її лексичне оточення, в якому х=10
const add2 = makeAdder(2); //? в add2 зберігатиметься посилання на анонімну фу-цію function(y) і її лексичне оточення, в якому х=2
const result = add2(3); //? параметром фу-ції function(y) буде 3, тобто  function(3), тобто після її виклику x + y = 2 + 3, в result попаде 5
const result = makeAdder(12)(100); //? в makeAdder аргументом передається 12, тобто х=12, далі фун-я повертає посилання на іншу ф-ію function(y)
//? після відбувається повторний виклик і викликатиметься вже фу-ія function(y) в яку аргументом передасться 100, і х + у = 12 + 100, в result попаде 112
console.log(result); // 112


console.log(add5(2));  // 7
console.log(add10(2)); // 12