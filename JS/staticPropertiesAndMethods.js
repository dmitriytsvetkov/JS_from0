/**
 * Created by Dmitriy on 14.12.2016.
 */
// #1
// Счетчик объектов
// Добавить в конструктор Article:

// Подсчёт общего количества созданных объектов.
// Запоминание даты последнего созданного объекта.
// Используйте для этого статические свойства.

// Пусть вызов Article.showStats() выводит то и другое.

// Использование:

// function Article() {
//     this.created = new Date();
        // ... ваш код ...
// }

// new Article();
// new Article();

// Article.showStats(); // Всего: 2, Последняя: (дата)

// new Article();

// Article.showStats(); // Всего: 3, Последняя: (дата)

/*
function Article() {
    Article.created = new Date();
    Article.createdObj++;


}
Article.createdObj = 0;

Article.showStats = function() {
    alert( "Всего: " + this.createdObj + ", Последняя: " + this.created );
};

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)*!/
*/























