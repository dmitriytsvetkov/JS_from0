/**
 * Created by Dmitriy on 28.12.2016.
 */
// #1
// Перепишите суммирование аргументов
// важность: 5решение
// Есть функция sum, которая суммирует все элементы массива:

//     function sum(arr) {
//         return arr.reduce(function(a, b) {
//             return a + b;
//         });
//     }

// alert( sum([1, 2, 3]) ); // 6 (=1+2+3)
// Создайте аналогичную функцию sumArgs(), которая будет суммировать все свои аргументы:

//     function sumArgs() {
        /* ваш код */
//     }

// alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива
// Для решения примените метод reduce к arguments, используя call, apply или одалживание метода.


/*
function sumArgs() {
    var args = [].slice;
    var arr = args.call(arguments);
    return arr.reduce(function (a, b) {
      return a + b;
		})
}

console.log( sumArgs(4, 5, 6) ); // 6, аргументы переданы через запятую, без массива
*/


// #2
// Примените функцию к аргументам
// Напишите функцию applyAll(func, arg1, arg2...), которая получает функцию func и произвольное количество аргументов.
// 		Она должна вызвать func(arg1, arg2...), то есть передать в func все аргументы, начиная со второго, и возвратить результат.

// 		Например:

// Применить Math.max к аргументам 2, -2, 3
// alert( applyAll(Math.max, 2, -2, 3) ); // 3

// Применить Math.min к аргументам 2, -2, 3
// alert( applyAll(Math.min, 2, -2, 3) ); // -2
// Область применения applyAll, конечно, шире, можно вызывать её и со своими функциями:

// 		function sum() { // суммирует аргументы: sum(1,2,3) = 6
// 			return [].reduce.call(arguments, function(a, b) {
// 				return a + b;
// 			});
// 		}

// function mul() { // перемножает аргументы: mul(2,3,4) = 24
// 	return [].reduce.call(arguments, function(a, b) {
// 		return a * b;
// 	});
// }

// alert( applyAll(sum, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
// alert( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24

/*
function sum() {
	return [].reduce.call(arguments, function(a, b) {
		return a + b;
	});
}

function mul() {
	return [].reduce.call(arguments, function(a, b) {
		return a * b;
	});
}

function applyAll(func) {
	return func.apply(this, [].slice.call(arguments, 1));
}

console.log( applyAll(sum, 1, 2, 3) ); // 6
console.log( applyAll(mul, 2, 3, 4) ); // 24
console.log( applyAll(Math.max, 2, -2, 3) ); // 3
console.log( applyAll(Math.min, 2, -2, 3) ); // -2
*/

























