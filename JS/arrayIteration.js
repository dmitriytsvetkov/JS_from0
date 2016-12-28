/**
 * Created by Dmitriy on 02.12.2016.
 */
// #1
// Перепишите цикл через map
// Код ниже получает из массива строк новый массив, содержащий их длины:
// var matrix = ["Есть", "жизнь", "на", "Марсе"];
// var arrLength = [];
// for (var i = 0; i < matrix.length; i++) {
//      arrLength[i] = matrix[i].length;
// }

// alert( arrLength ); // 4,5,2,5

/*
var matrix = ["Есть", "жизнь", "на", "Марсе"];
var arrLength = matrix.map(function (name) {
    return name.length;
});

alert( arrLength );
*/


// #2
// Массив частичных сумм
// На входе массив чисел, например: matrix = [1,2,3,4,5].
// Напишите функцию getSums(matrix), которая возвращает массив его частичных сумм.

// Иначе говоря, вызов getSums(matrix) должен возвращать новый массив из такого же числа элементов,
// в котором на каждой позиции должна быть сумма элементов matrix до этой позиции включительно.

// То есть:
// для matrix = [ 1, 2, 3, 4, 5 ]
// getSums( matrix ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
// Еще пример: getSums([-2,-1,0,1]) = [-2,-3,-3,-2].

// Функция не должна модифицировать входной массив.
// В решении используйте метод matrix.reduce.

/*
var numbersClone = numbers.slice();
var previousValue = 0;
var currentValue = 0;

for (var i = 0; i < numbersClone.length; i++) { // алгоритм заполнения массива суммой предыдущего чисел

    previousValue = currentValue;
    currentValue = numbersClone[i];
    numbersClone[i] = previousValue + currentValue;
}

alert(numbersClone);
*/


/*function getSums(matrix) {
    var result = [];
    if (!matrix.length) return result; // проверка

    var totalSum = matrix.reduce(function(sum, item) {
        result.push(sum); // пушим текущее значение после каждой итерации
        return sum + item;
    });
    result.push(totalSum); // результат метода matrix.reduce

    return result;
}

alert(getSums([1,2,3,4,5])); // 1,3,6,10,15
alert(getSums([-2,-1,0,1])); // -2,-3,-3,-2*/




















