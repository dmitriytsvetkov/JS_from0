/**
 * Created by Dmitriy on 05.12.2016.
 */
// #1
// Создайте дату
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут.
// Временная зона – местная. Выведите его на экран.

/*
var date = new Date(2012, 1, 20, 3, 12);
alert(date);
*/


// #2
// Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате „пн“, „вт“, … „вс“.
// Например:

//    var date = new Date(2012,0,3);  // 3 января 2012
// alert( getWeekDay(date) );      // Должно вывести 'вт'

/*
var date = new Date(2012, 0, 3);

alert( getWeekDay(date) );

function getWeekDay(date) {
    var day = date.getDay();
    switch (day) {
        case 0: return "вс"; break;
        case 1: return "пн"; break;
        case 2: return "вт"; break;
        case 3: return "ср"; break;
        case 4: return "чт"; break;
        case 5: return "пт"; break;
        case 6: return "сб"; break;
        default: return NaN;
    }
}
*/


// #3
// День недели в европейской нумерации
// Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.
// День нужно возвратить в европейской нумерации, т.е. понедельник имеет номер 1, вторник номер 2, …, воскресенье – номер 7.

// var date = new Date(2012, 0, 3);  // 3 янв 2012
// alert( getLocalDay(date) );       // вторник, выведет 2

/*
var date = new Date();
alert( getLocalDay(date) );

function getLocalDay(n) {
    var day = n.getDay();
    switch (day) {
        case 0: return 7; break;
        case 1: return 1; break;
        case 2: return 2; break;
        case 3: return 3; break;
        case 4: return 4; break;
        case 5: return 5; break;
        case 6: return 6; break;
        default: return NaN;
    }
}
*/


// #4
// День указанное количество дней назад
// Создайте функцию getDateAgo(date, days), которая возвращает число, которое было days дней назад от даты date.
// Например, для 2 января 2015:

// var date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); // 1, (1 января 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 января 2014)
// P.S. Важная деталь: в процессе вычислений функция не должна менять переданный ей объект date.

/*
var date = new Date(2015, 0, 2);

console.log(date);
console.log( getDateAgo(date, 365) );
console.log(date);

function getDateAgo(date, days) {
    var copiedDate = new Date(date);
    copiedDate.setDate( copiedDate.getDate() - days );
    return copiedDate;
}
*/


// #5
// Последний день месяца?
// Напишите функцию getLastDayOfMonth(year, month), которая возвращает последний день месяца.
// Параметры:

// year – 4-значный год, например 2012.
// month – месяц от 0 до 11.
// Например, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

/*
console.log( getLastDayOfMonth(2012, 1) );

function getLastDayOfMonth(year, month) {
    var date = new Date(year, month + 1);
    date.setDate( date.getDate());
    return date;
}
*/


// #6
// Сколько секунд уже прошло сегодня?
// Напишите функцию getSecondsToday() которая возвращает, сколько секунд прошло с начала сегодняшнего дня.

// Например, если сейчас 10:00 и не было перехода на зимнее/летнее время, то:

// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

/*console.log( getSecondsToday() );*/


/*console.log(getSecondsToday());


function getSecondsToday() {
    var date = new Date();
    return ( ( date.getHours()* 3600 ) + ( date.getMinutes() * 60 ) + ( date.getSeconds() ) );
}*/



















