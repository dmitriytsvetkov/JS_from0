// #1
// Определите, пуст ли объект
// Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.
// function isEmpty(obj) {
// **Ваш код**
//}

//var schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "подъём";
// alert( isEmpty(schedule) ); // false

/*
var schedule = {};
schedule["1"] = ["undefined"];

alert( isEmpty(schedule) );

function isEmpty(obj) {
    for (var prop in schedule) {

        }
    if (prop !== undefined) {
        return false;
    } else return true;
}
*/

// #2
// Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
// Если объект пустой, то результат должен быть 0.
// var salaries = {
// "Вася": 100,
// "Петя": 300,
// "Даша": 250
// };

//... ваш код выведет 650

/*
var salaries = {
    "Вася" : 100,
    "Петя" : 300,
    "Даша" : 250
};

function salariesSum(obj) {
    var result = 0;
    for (var key in obj) {

    }
}
*/


// #3
// Свойство с наибольшим значением
// Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
// Если объект пустой, то пусть он выводит «нет сотрудников».

// "use strict";
// var salaries = {
// "Вася": 100,
// "Петя": 300,
// "Даша": 250
// };

// ... ваш код выведет "Петя"

/*
var salaries = {
    "Вася": 100,
    "Петя": 200,
    "Даша": 150
};

alert( richestMan(salaries) );

function richestMan(obj) {
    var nameMax = "";
    var salaryMax = 0;
    for (var key in obj) {
        if (salaryMax < obj[key]) {
            nameMax = key;
            salaryMax = obj[key];
        }
    }
    if (key !== undefined) {
        return nameMax + salaryMax;
    } else return "нет сотрудников";
}
*/




























