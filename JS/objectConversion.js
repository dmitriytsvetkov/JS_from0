/**
 * Created by Dmitriy on 11.12.2016.
 */
// #1
// Сумма произвольного количества скобок
// Напишите функцию sum, которая будет работать так:

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15
// Количество скобок может быть любым.

/*
function sum(a) {
    var currentSum = 0; // накапливает значение при каждом вызове
    
    function f(b) {
        currentSum += b;
        return f;
    }
    f.toString = function () {
        return currentSum;
    };
    return f;
}
alert( sum(1)(2) ); // 3
alert( sum(5)(-1)(2) ); // 6
alert( sum(6)(-1)(-2)(-3) ); // 0
alert( sum(0)(1)(2)(3)(4)(5) ); // 15
*/





