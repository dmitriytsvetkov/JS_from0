/* Created by Dmitriy on 28.11.2016.
 */

// #1
// Используя конструкцию if..else, напишите код, который получает значение prompt, а затем выводит alert:
// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.

/*var num = prompt("Введите число: ", "");
 if (num > 0) {
 alert("1");
 } else if (num < 0) {
 alert("-1");
 } else if (num === "0") {
 alert("0");
 } else alert("Error");*/



// #2
// Перепишите if с использованием оператора '?':
// if (a + b < 4) {
// result = 'Мало';
// } else {
// result = 'Много';
// }

/*var a = 2;
 var b = 1;
 var result = "";
 (a+b < 4) ?  result = "Мало" : result = "Много";
 alert(result);*/


// #3
// Перепишите if..else с использованием нескольких операторов '?'.
// Для читаемости – оформляйте код в несколько строк.
// var message;
// if (login == 'Вася') {
// message = 'Привет';
// } else if (login == 'Директор') {
// message = 'Здравствуйте';
// } else if (login == '') {
// message = 'Нет логина';
// } else {
// message = '';
// }

/*var login = "Петя";
 var message = "";
 (login == "Вася") ? message = "Привет" :
 (login == "Директор") ? message = "Здравствуйте" :
 (login == "") ? message = "Нет логина" :
 message = "";*/