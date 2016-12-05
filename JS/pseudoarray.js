/**
 * Created by Dmitriy on 05.12.2016.
 */
// #1
// Проверка на аргумент-undefined
// Как в функции отличить отсутствующий аргумент от undefined?

// function f(x) {
    // ..ваш код..
    // выведите 1, если первый аргумент есть, и 0 - если нет
// }

// f(undefined); // 1
// f(); // 0

/*
f(undefined);
f(); // 0

function f(x) {
    if (arguments.length == 0) {
        alert(0);
    } else {
        alert(1);
    }
}
*/


// #2
// Сумма аргументов
// Напишите функцию sum(...), которая возвращает сумму всех своих аргументов:

// sum() = 0
// sum(1) = 1
// sum(1, 2) = 3
// sum(1, 2, 3) = 6
// sum(1, 2, 3, 4) = 10

/*
sum(1, 2, 3);
sum(1, 2, 3, 4);

function sum() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    } return alert(result);
}
*/


























