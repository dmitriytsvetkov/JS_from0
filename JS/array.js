/*
var fruits = ["Яблоко", "Апельсин", "Слива"];


alert( fruits ); // 3

// микс значений
var arr = [ 1, 'Имя', { name: 'Петя' }, true ];

// получить объект из массива и тут же -- его свойство
alert( arr[2].name ); // Петя

alert( fruits.pop() ); // удалили "Груша"


alert( fruits ); // Яблоко, Апельсин

fruits.push("Груша"); // добавляет в конец

alert( fruits ); // Яблоко, Апельсин, Груша


var fruits = ["Яблоко", "Апельсин", "Груша"];

alert( fruits.shift() ); // удалили Яблоко

alert( fruits ); // Апельсин, Груша

*/

/*var fruits = ["Яблоко"];

fruits.push("Апельсин", "Персик");
fruits.unshift("Ананас", "Лимон");

// результат: ["Ананас", "Лимон", "Яблоко", "Апельсин", "Персик"]
alert( fruits );

*/
/*var a = [];
a[0] = 0;
a[5] = 5;

alert( a ); // 0,,,,,5*/




/*var arr =  [ 1, 'Имя', { name: 'Петя' }, true ];

for (var i=0; i < arr.length; i++) {
  alert( arr[i] ); // Яблоко, Апельсин, Груша
}
*/

/*var arr = [1, 2, 3, 4, 5];

arr.length = 2; // укоротить до 2 элементов
alert( arr ); // [1, 2]

arr.length = 5; // вернуть length обратно, как было
alert( arr[2] ); // undefined: значения не вернулись*/


// Как получить последний элемент из произвольного массива?
// У нас есть массив goods. Сколько в нем элементов – не знаем, но можем прочитать из goods.length.
// Напишите код для получения последнего элемента goods.

/*var goods = ["asd", "123", 1];
var lastItem = goods[goods.length - 1]; // получаем последний эл-т массива
alert(lastItem);*/


// Как добавить элемент в конец произвольного массива?
// У нас есть массив goods. Напишите код для добавления в его конец значения «Компьютер».

/*var goods = ["Ноутбук", "Оперативная память", "Процессор"];
goods.push("Компьютер");
alert(goods);*/
// или goods[goods.length] = 'Компьютер' Текущий последний элемент имеет индекс goods.length-1. 
// Значит, индексом нового элемента будет goods.length



// Задача из 5 шагов-строк:
// Создайте массив styles с элементами «Джаз», «Блюз».
// Добавьте в конец значение «Рок-н-Ролл»
// Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
// Удалите первое значение массива и выведите его alert.
// Добавьте в начало значения «Рэп» и «Регги».

/*var styles = ["Джаз", "Блюз"];
alert(styles);

styles[styles.length] = "Рок-н-Ролл";
alert(styles);

styles[styles.length-2] = "Классика";
alert(styles);

var firstItem = styles.shift();
alert(styles);

styles.unshift("Рэп", "Регги");
alert(styles);
*/


// Напишите код для вывода alert случайного значения из массива:

/*var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
alert( arr[rand] );
var rand = Math.floor( Math.random() * (arr.length - 1) ); // Код для генерации случайного целого от min to max включительно:

alert( arr[rand] );*/



// Создайте функцию find(arr, value), которая ищет в массиве arr
// значение value и возвращает его номер, если найдено, или -1, если не найдено.

/*function find(array, value) {
  if (array.indexOf) { // если метод существует
    return array.indexOf(value);
  }

  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }

  return -1;
}

var arr = ["a", -1, 2, "b"];

var index = find(arr, 2);

alert( index );*/

/*var names = 'Маша, Петя, Марина, Василий';

var arr = names.split(', ');

for (var i = 0; i < arr.length; i++) {
  alert( 'Вам сообщение ' + arr[i] );
}*/


/*var arr = ["Я", "изучаю", "JavaScript"];

arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент

alert( arr ); //  осталось ["Я", "JavaScript"]*/


/*var arr = ["Я", "сейчас", "изучаю", "JavaScript"];

// удалить 3 первых элемента и добавить другие вместо них
arr.splice(0, 3, "Мы", "изучаем")

alert( arr ) // теперь ["Мы", "изучаем", "JavaScript"]*/


/*var arr = ["Я", "сейчас", "изучаю", "JavaScript"];

// удалить 2 первых элемента
var removed = arr.splice(0, 2);

alert( removed ); // "Я", "сейчас" <-- array of removed elements*/


/*var arr = ["Я", "изучаю", "JavaScript"];

// с позиции 2
// удалить 0
// вставить "сложный", "язык"
arr.splice(2, 0, "сложный", "язык");

alert( arr ); // "Я", "изучаю", "сложный", "язык", "JavaScript"*/


/*var arr = [1, 2, 5]

// начиная с позиции индексом -1 (перед последним элементом)
// удалить 0 элементов,
// затем вставить числа 3 и 4
arr.splice(-1, 0, 3, 4);

alert( arr ); // результат: 1,2,3,4,5*/


/*var arr = ["Почему", "надо", "учить", "JavaScript"];

var arr2 = arr.slice(1, 3); // элементы 1, 2 (не включая 3)

alert( arr2 ); // надо, учить*/


/*[1, -2, 15, 2, 0, 8].sort(function(a, b) {
  alert( a + " <> " + b );
});*/



/*// В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:
var obj = {
  className: 'open menu'
}
// Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:
addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

alert( obj.className ); // "open menu new me"

function addClass(obj, cls) {
    return cls = obj.join(' ');
}
addClass(obj, "new");*/


// Есть массив строк arr. Создайте массив arrSorted – из тех же элементов, но отсортированный.
// Исходный массив не должен меняться.

/*var arr = ["HTML", "JavaScript", "CSS"];
var newArr = arr.concat();
var newArr = newArr.sort();

alert( newArr ); // 1,2,3,4
alert( arr );*/


// Метод «arr.forEach(callback[, thisArg])» используется для перебора массива.
/*var arr = ["Яблоко", "Апельсин", "Груша"];

arr.forEach(function(item, i, arr) {
  alert( i + ": " + item + " (массив:" + arr + ")" );
});*/


// Метод «arr.filter(callback[, thisArg])» используется для фильтрации массива через функцию.
/*var arr = [1, -1, 2, -2, 3];

var positiveArr = arr.filter(function(number) {
  return number > 0;
});

alert( positiveArr ); // 1,2,3*/


//Метод «arr.map(callback[, thisArg])» используется для трансформации массива.
/*var names = ['HTML', 'CSS', 'JavaScript'];

var nameLengths = names.map(function(name) {
  return name.length;
});

// получили массив с длинами
alert( nameLengths ); // 4,3,10*/


//Метод «arr.every(callback[, thisArg])» возвращает true, если вызов callback вернёт true для каждого элемента arr.
//Метод «arr.some(callback[, thisArg])» возвращает true, если вызов callback вернёт true для какого-нибудь элемента arr.
/*var arr = [1, -1, 2, -2, 3];

function isPositive(number) {
  return number > 0;
}

alert( arr.every(isPositive) ); // false, не все положительные
alert( arr.some(isPositive) ); // true, есть хоть одно положительное*/

//Метод «arr.reduce(callback[, initialValue])» используется для последовательной обработки 
//каждого элемента массива с сохранением промежуточного результата.
/*var arr = [1, 2, 3, 4, 5]

// для каждого элемента массива запустить функцию,
// промежуточный результат передавать первым аргументом далее
var result = arr.reduce(function(sum, current) {
  return sum + current;
}, 0);

alert( result ); // 15*/



//Код ниже получает из массива строк новый массив, содержащий их длины:
//уберите цикл, используйте вместо него метод map.
/*var arr = ["Есть", "жизнь", "на", "Марсе"];

arrLength = arr.map(function(item) {
  return item.length;
});


alert( arrLength ); // 4,5,2,5*/



//На входе массив чисел, например: arr = [1,2,3,4,5].
//Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
//Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов, 
//в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.
// для arr = [ 1, 2, 3, 4, 5 ]
// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]


/*function getSums(arr) {
  var result = [];
  if (!arr.length) return result;

  arr.reduce(function(sum, item) {
    result.push(sum);
    return sum + item;
  });

  return result;
}

alert(getSums([1,2,3,4,5])); // результат: 1,3,6,10*/

/*function log(a, b, c) {
  alert("1, 2")
}

function log(a) {
  alert("1")
}



log(); // вызовется первая функция
log(); // вызовется вторая функция*/



// Как в функции отличить отсутствующий аргумент от undefined?
// f(undefined); // 1
// f(); // 0
// function f(x) {
  // ..ваш код..
  // выведите 1, если первый аргумент есть, и 0 - если нет
//}

/*function f(x) {
    "use strict"
    
    arguments.length ? alert(1) : alert(0); 
}

f(undefined);*/



// Напишите функцию sum(...), которая возвращает сумму всех своих аргументов:
// sum() = 0
// sum(1) = 1
// sum(1, 2) = 3

/*function sum() {
    var res = 0;
    for (var i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }
    return res;
}
alert( sum(3, 2, 3) );*/



// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут.
// Временная зона – местная. Выведите его на экран.

/*var date = new Date(2012, 1, 20, 3, 12);
alert(date);*/



// Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате „пн“, „вт“, … „вс“.
// var date = new Date(2012,0,3);  // 3 января 2012
// alert( getWeekDay(date) );      // Должно вывести 'вт'

function getWeekDay(date) {
    
    switch( date.getDay() ) {
        case 0: 
        alert("Воскресенье");
        break;

        case 1: 
        alert("Понедельник");
        break;

        case 2: 
        alert("Вторник");
        break;

        case 3: 
        alert("Среда");
        break;

        case 4: 
        alert("Четверг");
        break;

        case 5: 
        alert("Пятница");
        break;

        case 6: 
        alert("Суббота");
        break;
      
        default:
        alert("Бред")    
        break;
    }
    
}

var today = new Date(2016,10,26);

getWeekDay(today);