// Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом

/*function ucFirst(str) {
   var result = str.charAt(0)
   var str1 = str.substring(1);
   alert(result.toLowerCase() + str1);
}

ucFirst("Вася")*/

// Напишите функцию checkSpam(str), которая возвращает true, если строка str содержит „viagra“ или „XXX“, а иначе false.
/*

function checkSpam(str) {
  var lowerStr = str.toLowerCase();

  return !!(~lowerStr.indexOf('viagra') || ~lowerStr.indexOf('xxx'));
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
*/