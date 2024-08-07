/* Приватні методи корисні не лише тим, що обмежують доступ до коду, це також потужний засіб глобальної організації простору імен, що дозволяє не засмічувати публічний інтерфейс коду внутрішніми методами класів.

Код нижче ілюструє, як можна використовувати замикання для визначення публічних функцій, які мають доступ до закритих від користувача (private) функцій та змінних. Така манера програмування називається модульне програмування:  https://javascript.plainenglish.io/data-hiding-with-javascript-module-pattern-62b71520bddd*/
var Counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

alert(Counter.value()); /* Alerts 0 */
Counter.increment();
Counter.increment();
alert(Counter.value()); /* Alerts 2 */
Counter.decrement();
alert(Counter.value()); /* Alerts 1 */
/* Тут багато чого змінилося. У попередньому прикладі кожне замикання мало власний контекст виконання (оточення). Тут ми створюємо єдине оточення для трьох функцій: Counter.increment, Counter.decrement та Counter.value.

Єдине оточення створюється в тілі анонімної функції, яка виконується на момент опису. Це оточення містить два приватні елементи: змінну privateCounter і функцію changeBy(val). Жоден з цих елементів не доступний безпосередньо, за межами цієї анонімної функції. Натомість вони можуть і повинні використовуватися трьома публічними функціями, які повертаються анонімним блоком коду (anonymous wrapper), що виконується в тій самій анонімній функції.

Ці три публічні функції є замиканнями, які використовують загальний контекст виконання (оточення). Завдяки механізму lexical scoping в Javascript, всі вони мають доступ до змінної privateCounter і функції changeBy.

Зауважте, ми описуємо анонімну функцію, що створює лічильник, і відразу запускаємо її, привласнюючи результат виконання змінної Counter. Але ми також можемо не запускати цю функцію відразу, а зберегти її в окремій змінній, щоб використовувати для подальшого створення кількох лічильників так: */

var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }
};

var Counter1 = makeCounter();
var Counter2 = makeCounter();
alert(Counter1.value()); /* Alerts 0 */
Counter1.increment();
Counter1.increment();
alert(Counter1.value()); /* Alerts 2 */
Counter1.decrement();
alert(Counter1.value()); /* Alerts 1 */
alert(Counter2.value()); /* Alerts 0 */

/* Зауважте, що лічильники працюють незалежно один від одного. Це відбувається тому, що у кожного в момент створення функцією makeCounter() також створювався свій окремий контекст виконання (оточення). Тобто приватна змінна privateCounter в кожному з лічильників це дійсно окрема, самостійна змінна.

Використовуючи замикання подібним чином, ви отримуєте ряд переваг, які зазвичай асоціюються з об'єктно-орієнтованим програмуванням, таких як ізоляція та інкапсуляція. */
