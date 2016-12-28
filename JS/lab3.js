/**
 * Created by Dmitriy on 25.12.2016.
 */
// 2. Запись о товаре на складе представляет собой структуру с
// полями: номер склада, код товара, наименование товара, дата
// поступления на склад, срок хранения в днях, количество единиц
// товара, цена за единицу товара. Поиск и сортировка - по номеру
// склада, наименованию товара. Вывести список просроченных
// товаров (поиск всех товаров, у которых на текущую дату истек
// срок хранения).

    // storageNum - номер склада
    // storageCode - код товара
    // storageName - наименование товара
    // storageDate - дата поступления на склад
    // storageDays - срок хранения в днях
    // storageAmount - количество единиц товара
    // storagePrice - цена за единицу



var obj3 = {
    bla: "asd3",
    lala: "gg3",
    next: null
};

var obj2 = {
    bla: "asd2",
    lala: "gg2",
    next: obj3,
    prev: obj1
};

var obj1 = {
    "bla" : "asd1",
    lala: "gg1",
    next: obj2
};

function search(obj, field, value) {
    var current = obj;
    do {
        if (current[field] == value) {
            return current;
        }
        current = current.next;
    } while (current != null);
    return null;
}

var result = search(obj1, "bla", "asd1");
console.log(result);



