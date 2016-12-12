/**
 * Created by Dmitriy on 11.12.2016.
 */
// #1
// Создайте объект calculator с тремя методами:

// read() запрашивает prompt два значения и сохраняет их как свойства объекта
// sum() возвращает сумму этих двух значений
// mul() возвращает произведение этих двух значений
// var calculator = {
//     ...ваш код...
// }

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );


/*
var calc = {

    read: function () {
        this.a = +prompt("Введите два значения a:", "");
        this.b = +prompt("Введите два значения b:", "");

    },
    sum: function () {
        return this.a + this.b
    },
    mul: function () {
        return this.a * this.b
    }

};
calc.read();
alert( calc.sum() );
alert( calc.mul() );
*/


// #2
// Цепочка вызовов
// Есть объект «лестница» ladder:

// var ladder = {
//     step: 0,
//     up: function() { // вверх по лестнице
//         this.step++;
//     },
//     down: function() { // вниз по лестнице
//         this.step--;
//     },
//     showStep: function() { // вывести текущую ступеньку
//         alert( this.step );
//     }
// };
// Сейчас, если нужно последовательно вызвать несколько методов объекта, это можно сделать так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Модифицируйте код методов объекта, чтобы вызовы можно было делать цепочкой, вот так:

//     ladder.up().up().down().up().down().showStep(); // 1
// Как видно, такая запись содержит «меньше букв» и может быть более наглядной.

// Такой подход называется «чейнинг» (chaining) и используется, например, во фреймворке jQuery.

/*
var ladder = {
    step: 0,
    up: function() { // вверх по лестнице
        this.step++;
        return this     // решение в возврате текущего объекта
    },
    down: function() { // вниз по лестнице
        this.step--;
        return this
    },
    showStep: function() { // вывести текущую ступеньку
        alert( this.step );
        return this
    }
};

ladder.up().up().down().up().down().showStep().up().up().up().showStep();
*/

/*console.log ( [] + null + 1 );*/











