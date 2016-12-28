/**
 * Created by Dmitriy on 29.11.2016.
 */
// #1
// Добавить класс в строку
// В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:
// var obj = {
// className: 'open menu'
// }
// Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:
// addClass(obj, 'new'); // obj.className='open menu new'
// addClass(obj, 'open'); // без изменений (класс уже существует)
// addClass(obj, 'me'); // obj.className='open menu new me'
// alert( obj.className ); // "open menu new me"
// P.S. Ваша функция не должна добавлять лишних пробелов.

/*
var obj = {
    className: 'open menu'
};

addClass(obj, 'new');

console.log(obj);
function addClass(obj, cls) {
    var classes = obj.className ? obj.className.split(' ') : [];

    for (var i = 0; i < classes.length; i++) {
        if (classes[i] == cls) return; // класс уже есть
    }

    classes.push(cls); // добавить

    obj.className = classes.join(' '); // и обновить свойство
}
*/


// #2
// Функция removeClass
// У объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами:

// var obj = {
// className: 'open menu'
// };
// Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:

// removeClass(obj, 'open'); // obj.className='menu'
// removeClass(obj, 'blabla'); // без изменений (нет такого класса)

/*
var obj = {
    className: 'open menu'
};

removeClass(obj, "open");

console.log(obj);

function removeClass(obj, cls) {
    var classes = obj.className.split(" ");

    for (var i = 0; i < classes.length; i++) {
        if (classes[i] == cls) {
            classes.splice(i, 1);
            i--; // При вызове splice удаляется текущий, i-й элемент, и те элементы, которые идут дальше, сдвигаются на его место.
        }
    }
    obj.className = classes.join(" ");
}
*/


// #3
// Сортировать в обратном порядке
// Как отсортировать массив чисел в обратном порядке?
// var matrix = [5, 2, 1, -10, 8];
// отсортируйте?
// alert( matrix ); // 8, 5, 2, 1, -10

/*
var matrix = [5, 2, 1, -10, 8];

alert( matrix.sort(compareNumeric) ); // если не указать функцию, элементы будут сортироваться как строки

function compareNumeric(a, b) {
    // return a - b;  // возвращает положительное число, если a > b, отрицательное, если наоборот, и 0, если числа равны.
    return b - a; // наоборот
}
*/


// #4
// Скопировать и отсортировать массив
// Есть массив строк matrix. Создайте массив arrSorted – из тех же элементов, но отсортированный.
// Исходный массив не должен меняться.
// var matrix = ["HTML", "JavaScript", "CSS"];

// ... ваш код ...

// alert( arrSorted ); // CSS, HTML, JavaScript
// alert( matrix ); // HTML, JavaScript, CSS (без изменений)
// Постарайтесь сделать код как можно короче.

/*
var matrix = ["HTML", "JavaScript", "CSS"];
var arrSorted = matrix.slice();
arrSorted.sort();

alert( arrSorted );
alert( matrix );
*/


// #5
// Используйте функцию sort для того, чтобы «перетрясти» элементы массива в случайном порядке.
// var matrix = [1, 2, 3, 4, 5];
// matrix.sort(ваша функция);
// alert( matrix ); // элементы в случайном порядке, например [3,5,1,2,4]

/*
var matrix = [1, 2, 3, 4, 5];

matrix.sort(randomSort);

function randomSort(a, b) {

    return Math.random() - 0.5;
}
alert(matrix);
*/













