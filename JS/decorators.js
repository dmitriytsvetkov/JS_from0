/**
 * Created by Dmitriy on 05.02.2017.
 */
// #1
// Создайте декоратор makeLogging(f, log), который берет функцию f и массив log.

// Он должен возвращать обёртку вокруг f, которая при каждом вызове записывает («логирует») аргументы в log, а затем передает вызов в f.

// В этой задаче можно считать, что у функции f ровно один аргумент.

// Работать должно так:

// function work(a) {
			/* ... */ // work - произвольная функция, один аргумент
// }

// function makeLogging(f, log) { /* ваш код */ }

// var log = [];
// work = makeLogging(work, log);

// work(1); // 1, добавлено в log
// work(5); // 5, добавлено в log

// for (var i = 0; i < log.length; i++) {
// 	console.log( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
// }




/*function f(x) {
	console.log("running " + x);
	return Math.random() * x; // random для удобства тестирования
}

function makeCaching(f) {
	var results = {};
	return function (a) {
		if (!results[a]) {
			results[a] = f(a);
		}
		return results[a];
	}
}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
console.log( a == b ); // true (значение закешировано)

b = f(2);
console.log( a == b ); // false, другой аргумент => другое значение*/




