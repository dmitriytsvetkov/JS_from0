/*var user = {};
user.name = "Дима";
user.surname = "Цветков";
user.name = "Сергей";
delete user.name;
alert( "name" in user );*/

/*if ("name" in person) {
  alert( "Свойство name существует!" );
}*/

/*alert( person.test === undefined );*/
/*alert( "test" in person );*/


// person['любимый стиль музыки'] = 'Джаз';

/*
var menu = {
  width: 300,
  height: 200,
  title: "Menu"
};

for (var key in menu) {
  // этот код будет вызван для каждого свойства объекта
  // ..и выведет имя свойства и его значение

  alert( "Ключ: " + key + " значение: " + menu[key] );
}
*/


/*var menu = {
  width: 300,
  height: 200,
  title: "Menu"
};

var counter = 0;

for (var key in menu) {
  counter++;
}

alert( "Всего свойств: " + counter );*/


/*var codes = {
  "+7": "Россия",
  "+38": "Украина",
  "+1": "США"
};

for (var code in codes) {
  var value = codes[code];
  code = +code; // ..если нам нужно именно число, преобразуем: "+7" -> 7

  alert( code + ": " + value ); // 7, 38, 1 во всех браузерах
}
*/


// Создайте функцию isEmpty(obj), которая возвращает true, 
// если в объекте нет свойств и false – если хоть одно свойство есть.

/*function isEmpty(obj) {
   for (var key in obj) {
    return false;
  }

  return true;  
}

var schedule = {};


alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) )*/


// Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
// Если объект пустой, то результат должен быть 0.

/*var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

var sum = 0;

for (var key in salaries) {
  // этот код будет вызван для каждого свойства объекта
  // ..и выведет его значение


  sum = sum + salaries[key];

}
alert(sum);*/

// Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
// Если объект пустой, то пусть он выводит «нет сотрудников».

/*var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

var max = 0;
var maxName = "";
for (var name in salaries) {
  if (max < salaries[name]) {
    max = salaries[name];
    maxName = name;
  }
}

alert( maxName || "нет сотрудников" );*/

// Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2

/*var menu = {
    width: 200,
    title: "My menu",
    height: 300

};

function multiplyNumeric(obj) {
    var result = 0;
    for (var name in obj) {
        if ( isNumeric(obj[name]) ) {
        result = obj[name] * 2;
         alert( result );
     } else continue;
    }   
}

multiplyNumeric(menu);

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}*/


