// #1
// Получить последний элемент массива
// Как получить последний элемент из произвольного массива?
// У нас есть массив goods. Сколько в нем элементов – не знаем, но можем прочитать из goods.length.
// Напишите код для получения последнего элемента goods.

/*
var goods = [1, 2, 3, 4, 2, 6];

var lastItem = goods[(goods.length -1)];
*/


// #2
// Добавить новый элемент в массив
// Как добавить элемент в конец произвольного массива?
// У нас есть массив goods. Напишите код для добавления в его конец значения «Компьютер».

/*
var goods = [];
goods.push ("Компьютер");
alert(goods);
*/


// #3
// Получить случайное значение из массива
// Напишите код для вывода alert случайного значения из массива:
// var matrix = ["Яблоко", "Апельсин", "Груша", "Лимон"];
// P.S. Код для генерации случайного целого от min to max включительно:
// var rand = min + Math.floor(Math.random() * (max + 1 - min));

/*
var matrix = ["Яблоко", "Апельсин", "Груша", "Лимон"];

var rand = Math.floor(Math.random() * ( (matrix.length - 1) + 1) );

alert( matrix[rand] );
*/


// #4
// Создайте калькулятор для введённых значений
// Напишите код, который:
// Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
// Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
// При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
// Выводит сумму всех значений массива

/*
var matrix = [];

while (true) {
    var x = prompt("Введите очередной элемент массива:", "" );
    if ( isNumeric(x) ) {
        matrix.push(x);
    }   else break;
}

var sum = 0;

for (var i = 0; i < matrix.length; i++) {
    sum += +matrix[i];
}
alert(sum);


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
*/


// #5
// Поиск в массиве
// Создайте функцию find(matrix, value),
// которая ищет в массиве matrix значение value и возвращает его номер, если найдено, или -1, если не найдено.
// Например:
// matrix = ["test", 2, 1.5, false];

// find(matrix, "test"); // 0
// find(matrix, 2); // 1
// find(matrix, 1.5); // 2
// find(matrix, 0); // -1

/*
var matrix = ["a", -1, 2, "b"];

var index = find(matrix, 2);

alert( index );

function find(matrix, value) {
    for (var i = 0; i < matrix.length; i++) {
        if (matrix[i] === value) {
            return i;
        } else return -1;
    }
}
*/








