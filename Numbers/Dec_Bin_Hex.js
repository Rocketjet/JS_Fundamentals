
const decimal  = 111;  // десяткова система зчислення
/* 
321 = 3*100 + 2*10 + 1*1   (100 = 10**2, 10 = 10**1, 1 = 10**0 )
*/

const binary = 0b111;   // двійкова система зчислення
/* 
100101 = 1*32 + 0*16 + 0*8 + 1*4 + 0*2 + 1*1    (32 = 2**5, 16 = 2**4, 8 = 2**3, 4 = 2**2, 2 = 2**1, 1 = 2**0)
*/

const hex = 0x111;   // шістнадцяткова система зчислення
/* 
100101 = 1*1048576 + 0*65536 + 0*4096 + 1*256 + 0*16 + 1*1    (1048576 = 16**5, 65536 = 16**4, 4096 = 16**3, 256 = 16**2, 16 = 16**1, 1 = 16**0)
 */

/* (Метод num.toString(base) возвращает строковое представление числа num в системе счисления base.)
Если нам надо вызвать метод непосредственно на числе, как toString в примере выше, то нам надо поставить две точки .. после числа.
Также можно записать как (123456).toString(36).         alert( 123456..toString(36) );  2n9c */

/* Функция parseInt() имеет необязательный второй параметр. Он определяет систему счисления, таким образом parseInt может также 
читать строки с шестнадцатеричными числами, двоичными числами и т.д.: 
alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255, без 0x тоже работает
alert( parseInt('2n9c', 36) ); // 123456
*/


console.log(`decimal 111 = ${decimal}`);
console.log(`binary 111 = ${binary}`);
console.log(`hex 111 = ${hex}`);