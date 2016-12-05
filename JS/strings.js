// #1
// Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом

/*
function ucFirst(str) {
   var result = str.charAt(0)
   var str1 = str.substring(1);
   alert(result.toLowerCase() + str1);
}

ucFirst("");
*/

// #2
// Напишите функцию checkSpam(str), которая возвращает true, если строка str содержит „viagra“ или „XXX“, а иначе false.

/*
function checkSpam(str) {
  var lowerStr = str.toLowerCase();

  return !!(~lowerStr.indexOf('viagra') || ~lowerStr.indexOf('xxx'));
}

alert( checkSpam("Viagra") );
alert( checkSpam('free xxxxx') );
*/


// #3
// Усечение строки
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str,
// и если она превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength.
// Результатом функции должна быть (при необходимости) усечённая строка.
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хоте..."
// truncate("Всем привет!", 20) = "Всем привет!"

/*
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        var strAfterMax = str.substring( 0, (maxlength + 1) ); //
        return strAfterMax + "...";
    }
}

var x = "Вот, что мне хотелось бы сказать на эту тему:"
alert( truncate(x, 20) );
*/


// #4
// Выделить число
// Есть стоимость в виде строки: "$120". То есть, первым идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять число-значение, в данном случае 120.

/*
function extractCurrencyValue(str) {
    return +str.substring(1);
}
alert( typeof (extractCurrencyValue("$120")) );
*/































