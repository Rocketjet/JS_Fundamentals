/* Наш електронний Mate telegraph відправляє повідомлення, використовуючи цифри 0 і 1.
Щось пішло не так і він почав відправляти неочікувані значення: пустий рядок (''),
рядки замість чисел ('0', '1'), а то і взагалі щось незрозуміле (NaN, undefined, null, 234 та ін.).
Ми помітили закономірність. Там, де мало б бути 1, зараз приходить будь-яке truthy значення. А там де 0 - falsy.
Допоможеш розкодувати повідомлення? Потрібно повернути 0 або 1 в залежності від переданого повідомлення input.

Приклади:

decodeSignal('abc') === 1
decodeSignal('1') === 1
decodeSignal(0) === 0
decodeSignal('') === 0
decodeSignal(null) === 0

Для того, щоб дізнатись, яке значення truthy або falsy має повідомлення input, можна використати подвійний логічний оператор NOT(!!), наприклад:

!!'Hello' === true
!!null === false */

function decodeSignal(input) {
  if (!!input === true) {
    return input = 1;
  } else {
    return input = 0;
  }
}