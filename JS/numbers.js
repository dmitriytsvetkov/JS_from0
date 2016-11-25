// Создайте страницу, которая предлагает ввести два числа и выводит их сумму.

/*var aNum = +prompt("Введите число А: ");
var bNum = +prompt("Введите число B: ");*/


/*result = aNum + bNum;*/
/*
alert( +result.toFixed(10) );*/
/*alert( +(0.1 + 0.2).toFixed(10) + '$' );*/


// Напишите функцию getDecimal(num), которая возвращает десятичную часть числа:
// alert( getDecimal(12.345) ); // 0.345

/*function getDecimal(num) {
    var result = +0;
  if(num > 0) {
    result = num % 1;
  } else result = -num % 1;

  result.toFixed(2);
  return result;
}
alert( getDecimal(-1.2) );
*/


// ГСЧ от min to max не включая max


/*var max = 10;
var min = 5;

alert( min + Math.random() * (max - min) );*/


// Функция randomInteger(min, max) для генерации случайного целого числа между min и max, 
// включая min,max как возможные значения.


/*function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }


alert( randomInteger(1, 3) );*/