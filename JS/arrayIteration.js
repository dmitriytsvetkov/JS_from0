/**
 * Created by Dmitriy on 02.12.2016.
 */
// #1
// Перепишите цикл через map
// Код ниже получает из массива строк новый массив, содержащий их длины:
// var arr = ["Есть", "жизнь", "на", "Марсе"];
// var arrLength = [];
// for (var i = 0; i < arr.length; i++) {
//      arrLength[i] = arr[i].length;
// }

// alert( arrLength ); // 4,5,2,5

/*
var arr = ["Есть", "жизнь", "на", "Марсе"];
var arrLength = arr.map(function (name) {
    return name.length;
});

alert( arrLength );
*/


// #2
// Массив частичных сумм
// На входе массив чисел, например: arr = [1,2,3,4,5].
// Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.

// Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов, 
// в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.

// То есть:
// для arr = [ 1, 2, 3, 4, 5 ]
// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
// Еще пример: getSums([-2,-1,0,1]) = [-2,-3,-3,-2].

// Функция не должна модифицировать входной массив.
// В решении используйте метод arr.reduce.

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


/*function getSums(arr) {
    var result = [];
    if (!arr.length) return result; // проверка

    var totalSum = arr.reduce(function(sum, item) {
        result.push(sum); // пушим текущее значение после каждой итерации
        return sum + item;
    });
    result.push(totalSum); // результат метода arr.reduce

    return result;
}

alert(getSums([1,2,3,4,5])); // 1,3,6,10,15
alert(getSums([-2,-1,0,1])); // -2,-3,-3,-2*/




















