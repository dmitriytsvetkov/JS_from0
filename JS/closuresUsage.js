/**
 * Created by Dmitriy on 08.12.2016.
 */
// #1
// Сумма через замыкание
// Напишите функцию sum, которая работает так: sum(a)(b) = a+b.
// Да, именно так, через двойные скобки (это не опечатка). Например:

// sum(1)(2) = 3
// sum(5)(-1) = 4

/*
function sum(a) {
    return function(b){
        return a+b;
    }
}

console.log( sum(1)(-4) ); // Чтобы вторые скобки в вызове работали – первые должны возвращать функцию.
*/


// #2
// Функция - строковый буфер
// В некоторых языках программирования существует объект «строковый буфер»,
// который аккумулирует внутри себя значения. Его функционал состоит из двух возможностей:
// Добавить значение в буфер.
// Получить текущее содержимое.
// Задача – реализовать строковый буфер на функциях в JavaScript, со следующим синтаксисом:
// Создание объекта: var buffer = makeBuffer();.
// Вызов makeBuffer должен возвращать такую функцию buffer, которая при вызове buffer(value)
// добавляет значение в некоторое внутреннее хранилище, а при вызове без аргументов buffer() – возвращает его.
// Вот пример работы:

// function makeBuffer() { /* ваш код */ }

// var buffer = makeBuffer();

// добавить значения к буферу
// buffer('Замыкания');
// buffer(' Использовать');
// buffer(' Нужно!');

// получить текущее значение
// alert( buffer() ); // Замыкания Использовать Нужно!
// Буфер должен преобразовывать все данные к строковому типу:

// var buffer = makeBuffer();
// buffer(0);
// buffer(1);
// buffer(0);

// alert( buffer() ); // '010'
// Решение не должно использовать глобальные переменные.


/*
function makeBuffer() {
    var text = '';

    return function(piece) {
       if(arguments.length == 0) {
           return text;
       }
        text += piece;  // почему то подразумевается return
    };
}

var buffer = makeBuffer();

// добавить значения к буферу


buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
alert( buffer() ); // 'Замыкания Использовать Нужно!'

var buffer2 = makeBuffer();
buffer2(0);
buffer2(1);
buffer2(0);

alert( buffer2() ); // '010'
*/




// #3
// Строковый буфер с очисткой
// Добавьте буферу из решения задачи Функция - строковый буфер метод buffer.clear(), который будет очищать текущее содержимое буфера:

/*
function makeBuffer() {
    var text = "";

        function abc(piece) {
            if(arguments.length == 0) {
                return text;
            }
            text += piece;
        }

        abc.reset = function() {
            return text = "";
        };
        return abc;

}

var buffer = makeBuffer();

 buffer('Замыкания');
 buffer(' Использовать');
 buffer.reset();
 buffer(' Нужно!');

 alert( buffer() ); // 'Замыкания Использовать Нужно!'

 var buffer2 = makeBuffer();
 buffer2(0);
 buffer2(1);
 buffer2(0);

 alert( buffer2() ); // '010'
 */


// #4
// Сортировка
// У нас есть массив объектов:

// var users = [{
//    name: "Вася",
//    surname: 'Иванов',
//    age: 20
// }, {
//    name: "Петя",
//    surname: 'Чапаев',
//    age: 25
// }, {
//    name: "Маша",
//    surname: 'Медведева',
//    age: 18
// }];
// Обычно сортировка по нужному полю происходит так:

// по полю name (Вася, Маша, Петя)
//    users.sort(function(a, b) {
//        return a.name > b.name ? 1 : -1;
//    });

// по полю age  (Маша, Вася, Петя)
// users.sort(function(a, b) {
//     return a.age > b.age ? 1 : -1;
// });
// Мы хотели бы упростить синтаксис до одной строки, вот так:

//     users.sort(byField('name'));
// users.forEach(function(user) {
//     alert( user.name );
// }); // Вася, Маша, Петя

// users.sort(byField('age'));
// users.forEach(function(user) {
//     alert( user.name );
// }); // Маша, Вася, Петя
// То есть, вместо того, чтобы каждый раз писать в sort function... – будем использовать byField(...)

// Напишите функцию byField(field), которую можно использовать в sort для сравнения объектов по полю field, чтобы пример выше заработал.

/*
var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
}, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
}];

function byField(property) {

    return function (a,b) {
        return (a[property] < b[property]) ? -1 : 1;
    }
}

users.sort( byField("name") );
users.forEach(function(user) {
    alert( user.name );
});

users.sort(byField('age'));
users.forEach(function(user) {
    alert( user.name );
});
*/


// #5
// Фильтрация через функцию
// Создайте функцию filter(arr, func), которая получает массив arr и возвращает новый,
// в который входят только те элементы arr, для которых func возвращает true.
// Создайте набор «готовых фильтров»: inBetween(a,b) – «между a,b», inArray([...]) – "в массиве [...]". Использование должно быть таким:
//     filter(arr, inBetween(3,6)) – выберет только числа от 3 до 6,
//     filter(arr, inArray([1,2,3])) – выберет только элементы, совпадающие с одним из значений массива.
//     Пример, как это должно работать:

    /* .. ваш код для filter, inBetween, inArray */
//     var arr = [1, 2, 3, 4, 5, 6, 7];

// alert(filter(arr, function(a) {
//     return a % 2 == 0
// })); // 2,4,6

// alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

// alert( filter(arr, inArray([1, 2, 10])) ); // 1,2

var arr = [1, 2, 3, 4, 5, 6, 7, 22, 19];


function filter(arr, func) {
    var result = [];
    for (var i = 0; i < arr.length; i++) { // перебор массива
        var value = arr[i];
        if (func(value)) {
            result.push(value); // пушим елемент если func(value) == true
        }
    }
    return result;
}

function inBetween(a, b) {
    return function (x) { // чтобы получить в итоге true или false
        return x >= a && x <= b;
    }
}
function inArray(arr) {
    return function (x) {
        return arr.indexOf(x) != -1; // ищем и возвращаем массив
    }
}
console.log(filter(arr, function(a) {
    return a % 2 == 0
})); // 2,4,6
console.log( filter(arr, inBetween(3, 9)) );
console.log( filter(arr, inArray([1,3,7])) );






