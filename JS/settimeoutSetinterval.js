/**
 * Created by Dmitriy on 05.02.2017.
 */
// #1
// Напишите функцию printNumbersInterval(), которая последовательно выводит в консоль числа от 1 до 20,
// с интервалом между числами 100 мс. То есть, весь вывод должен занимать 2000 мс, в течение которых каждые 100 мс
// в консоли появляется очередное число.
// P.S. Функция должна использовать setInterval.


/*
function printNumbersInterval() {
	var counter = 1;
	var timerId = setInterval(function () {
		(counter == 21) ? clearInterval(timerId) : console.log( counter++ );
	}, 100);
}

printNumbersInterval();
*/


// #2
// Сделайте то же самое, что в задаче Вывод чисел каждые 100 мс, но с использованием рекурсивного setTimeout вместо setInterval.


/*
function printNumbersTimeout() {
	var counter = 1;
	var timerId = setTimeout(function tick() {
		(counter == 21) ? clearTimeout(timerId) : console.log( counter++ ); timerId = setTimeout(tick, 100);
	}, 100);
}

printNumbersTimeout();
*/


// #3
// Напишите функцию delay(f, ms), которая возвращает обёртку вокруг f, задерживающую вызов на ms миллисекунд.
// Например:

// function f(x) {
// 	console.log( x );
// }

// var f1000 = delay(f, 1000);
// var f1500 = delay(f, 1500);

// f1000("тест"); // выведет "тест" через 1000 миллисекунд
// f1500("тест2"); // выведет "тест2" через 1500 миллисекунд
// Упрощённо можно сказать, что delay возвращает "задержанный на ms" вариант f.

// В примере выше у функции только один аргумент, но delay должна быть универсальной: передавать любое количество аргументов и контекст this.


/*
function delay(f, ms) {

	return function() {
		var savedThis = this;
		var savedArgs = arguments;

		setTimeout(function() {
			f.apply(savedThis, savedArgs);
		}, ms);
	};

}

function f(x) {
	console.log( x );
}

var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд
*/


// #4
// Напишите функцию debounce(f, ms), которая возвращает обёртку, которая передаёт вызов f не чаще, чем раз в ms миллисекунд.

// Лишние» вызовы игнорируются. Все аргументы и контекст – передаются.

// Например:

// function f() { ... }

// var f = debounce(f, 1000);

// f(1); // выполнится сразу же
// f(2); // игнор

// setTimeout( function() { f(3) }, 100); // игнор (прошло только 100 мс)
// setTimeout( function() { f(4) }, 1100); // выполнится
// setTimeout( function() { f(5) }, 1500); // игнор
// Упрощённо можно сказать, что debounce возвращает вариант f, срабатывающий не чаще чем раз в ms миллисекунд.
















