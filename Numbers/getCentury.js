/* Напиши функцію getCentury, яка приймає рік (year) і повертає століття, в якому він знаходиться.
Зверни увагу, що літочислення починається з 1 року н.е., тому 0 має оброблятися як перший рік н.е.

Наприклад:
getCentury(2001) === 21;
getCentury(0) === 1;
getCentury(1786) === 18. */

/* function getCentury(year) {
  if (year === 0) {
    ++year;
  }
  if (year % 100 > 0) {               // якщо залишок від ділення більше 0
    if (year % 100 >= 50) {           // далі якщо залишок від ділення більше або рівний 50
      return Math.round(year / 100);   // повернути рік / 100 і заокруглити до найближчого цілого
    } else {
      return (Math.round((year / 100)) + 1);    // якщо залишок від ділення менше 50, то повернути рік / 100 
    }                                           // і заокруглити до найближчого цілого + 1 
  } else {                                     // (напр. 2040, залишок 40, 2040/100 = 20,4 = 20 після заокруглення + 1 =21 століття)
    return Math.round((year / 100));           // якщо залишок від ділення 0, то одразу поветраємо  рік / 100
  }
} */

// const getCentury = year => Math.ceil(year/100)

console.log(getCentury(2000));
