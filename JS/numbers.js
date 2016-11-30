// #1
// Создайте страницу, которая предлагает ввести два числа и выводит их сумму.

/*var aNum = +prompt("Введите число А: ");
var bNum = +prompt("Введите число B: ");*/

/*result = aNum + bNum;*/
/*
alert( +result.toFixed(10) );*/
/*alert( +(0.1 + 0.2).toFixed(10) + '$' );*/


// #2
// Напишите функцию getDecimal(num), которая возвращает десятичную часть числа:
// alert( getDecimal(12.345) ); // 0.345

/*function getDecimal(num) {
    var result = +0;
  if(num > 0) {
    result = num % 1;
  } else result = -num % 1;

  result = Math.round(result * 10) / 10;
  return result;
}
alert( getDecimal(-1.1212112) );*/


// #3
// Случайное из интервала (0, max)

/*
function getRandom(min, max) {
    return Math.random() * (max - min - 1) + min;
}

alert( getRandom(0, 10) );*/


































