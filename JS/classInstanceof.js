/**
 * Created by Dmitriy on 03.02.2017.
 */
// #1
// Полиморфная функция formatDate
// Напишите функцию formatDate(date), которая возвращает дату в формате dd.mm.yy.

// Ее первый аргумент должен содержать дату в одном из видов:

// 		Как объект Date.
// 		Как строку, например yyyy-mm-dd или другую в стандартном формате даты.
// 		Как число секунд с 01.01.1970.
// 		Как массив [гггг, мм, дд], месяц начинается с нуля
// Для этого вам понадобится определить тип данных аргумента и, при необходимости, преобразовать входные данные в нужный формат.

// 		Пример работы:

// 		function formatDate(date) { /* ваш код */ }

// alert( formatDate('2011-10-02') ); // 02.10.11
// alert( formatDate(1234567890) ); // 14.02.09
// alert( formatDate([2014, 0, 1]) ); // 01.01.14
// alert( formatDate(new Date(2014, 0, 1)) ); // 01.01.14

/*function formatDate(date) {
	var dateClass = getClass(date);
	if (dateClass === "String") {
		return toRussianDate(date);
	} else if (dateClass === "Number") {
			var numDate = new Date(date * 1000).toLocaleString().substring(0, 10);
		return toRussianDate(numDate);
	} else if (dateClass === "Array") {
		var arrDate = date.join("-");
		arrDate.toLocaleString().substring(0, 10);
		return toRussianDate(arrDate)
	} else if (dateClass === "Date") {
		var dateDate = date.toLocaleString().substring(0, 10);
		return toRussianDate(dateDate);
	}
}

function getClass(obj) {
	return {}.toString.call(obj).slice(8, -1);
}

function toRussianDate(str) {
	var a = str.split("-");
	var year = a[0].substring(2, 4);
	var month = a[1].substring(0, 2);
	var day = a[2].substring(0, 2);
	return day + "." + month + "." + year;
}

console.log( formatDate("2011-10-02") );
console.log( formatDate(1234567890) );
console.log( formatDate([2014, 0, 1]) );
console.log( formatDate(new Date(2014, 0, 1)) );*/

