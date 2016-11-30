// #1
// Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

/*function sumTo(num) {
	var result = num;
    if (num != 1) {
        result = result + ( sumTo(num - 1) );
	}	return result;
}
alert( sumTo(3) );*/


// #2
// Вычислить факториал
// Факториа́л числа – это число, умноженное на «себя минус один», затем на «себя минус два» и так далее, до единицы. Обозначается n!
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120

/*function factorial(num) {
    var result = num;
    if (num != 1) {
        result = result * ( factorial(num - 1) );
    }	return result;
}
alert( factorial(4) );*/

// #3
// Числа Фибоначчи
// Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
// Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.
// Напишите функцию fib(n), которая возвращает n-е число Фибоначчи. Пример работы:
// function fib(n) { /* ваш код */ }
// alert( fib(3) ); // 2
// alert( fib(7) ); // 13
// alert( fib(77)); // 5527939700884757

/*function fib(n) {
 var a = 1,
 b = 0,
 x;
 for (i = 0; i < n; i++) {
 x = a + b;
 a = b
 b = x;
 }
 return b;
}
alert( fib(4) );*/






















