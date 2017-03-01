/**
 * Created by Dmitriy on 14.02.2017.
 */
// #1
// В коде CoffeeMachine сделайте так, чтобы метод run выводил ошибку, если кофеварка выключена.
//
// В итоге должен работать такой код:
//
// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.run(); // ошибка, кофеварка выключена!
// А вот так – всё в порядке:
//
// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.enable();
// coffeeMachine.run(); // ...Кофе готов!

/*function Machine(power) {
	this._enabled = false;

	var self = this;

	this.enable = function() {
		// используем внешнюю переменную вместо this
		self._enabled = true;
	};

	this.disable = function() {
		self._enabled = false;
	};

}

function CoffeeMachine(power) {
	Machine.apply(this, arguments);

	var waterAmount = 0;

	this.setWaterAmount = function(amount) {
		waterAmount = amount;
	};

	var parentEnable = this.enable;
	this.enable = function() {
		parentEnable(); // теперь можно вызывать как угодно, this не важен


	};

	function onReady() {
		console.log( 'Кофе готово!' );
	}

	this.run = function() {
		if(this._enabled) {
			setTimeout(onReady, 1000)
		} else throw new Error( "ошибка, кофеварка выключена!" ) ;

	};

}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.enable();
coffeeMachine.run();*/


// #2
// Когда кофеварку выключают – текущая варка кофе должна останавливаться.
//
// Например, следующий код кофе не сварит:
//
// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.enable();
// coffeeMachine.run();
// coffeeMachine.disable(); // остановит работу, ничего не выведет

/*
function Machine(power) {
	this._enabled = false;

	var self = this;

	this.enable = function() {
		// используем внешнюю переменную вместо this
		self._enabled = true;
	};

	this.disable = function() {
		self._enabled = false;
	};

}

function CoffeeMachine(power) {
	Machine.apply(this, arguments);

	var waterAmount = 0;
	var timerId;

	this.setWaterAmount = function(amount) {
		waterAmount = amount;
	};

	var parentEnable = this.enable;
	this.enable = function() {
		parentEnable(); // теперь можно вызывать как угодно, this не важен


	};

	var parentDisable = this.disable;
	this.disable = function() {
		parentDisable(); // теперь можно вызывать как угодно, this не важен
		clearTimeout(timerId);
	};

	function onReady() {
		console.log( 'Кофе готово!' );
	}

	this.run = function() {
		if(this._enabled) {
			timerId = setTimeout(onReady, 1000)
		} else throw new Error( "ошибка, кофеварка выключена!" ) ;

	};

}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable();
*/


// #3
// Создайте класс для холодильника Fridge(power), наследующий от Machine, с приватным свойством food и методами addFood(...), getFood():
//
// Приватное свойство food хранит массив еды.
// Публичный метод addFood(item) добавляет в массив food новую еду, доступен вызов с несколькими аргументами addFood(item1, item2...) 
// для добавления нескольких элементов сразу.
// Если холодильник выключен, то добавить еду нельзя, будет ошибка.
// Максимальное количество еды ограничено power/100, где power – мощность холодильника, указывается в конструкторе. При попытке добавить больше – будет ошибка
// Публичный метод getFood() возвращает еду в виде массива, добавление или удаление элементов из которого не должно влиять на свойство food холодильника.
// Код для проверки:
//
// var fridge = new Fridge(200);
// fridge.addFood("котлета"); // ошибка, холодильник выключен
// Ещё код для проверки:
//
// // создать холодильник мощностью 500 (не более 5 еды)
// var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood("котлета");
// fridge.addFood("сок", "зелень");
// fridge.addFood("варенье", "пирог", "торт"); // ошибка, слишком много еды
// Код использования холодильника без ошибок:
//
// var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood("котлета");
// fridge.addFood("сок", "варенье");
//
// var fridgeFood = fridge.getFood();
// console.log( fridgeFood ); // котлета, сок, варенье
//
// // добавление элементов не влияет на еду в холодильнике
// fridgeFood.push("вилка", "ложка");
//
// console.log( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье
// Исходный код класса Machine, от которого нужно наследовать:
//
// function Machine(power) {
// 	this._power = power;
// 	this._enabled = false;
//
// 	var self = this;
//
// 	this.enable = function() {
// 		self._enabled = true;
// 	};
//
// 	this.disable = function() {
// 		self._enabled = false;
// 	};
// }

/*
function Machine(power) {
	this._power = power;
	this._enabled = false;

	var self = this;

	this.enable = function() {
		self._enabled = true;
	};

	this.disable = function() {
		self._enabled = false;
	};
}

function Fridge(power) {
	Machine.apply(this, arguments);

	var food = [];

	this.addFood = function () {
		if (this._enabled) {
			for (var i = 0; i < arguments.length; i++) {
				if (food.length < power/100) {
					food.push(arguments[i])
				} else throw new Error ("Максимальное количество еды ограничено")
			}
		} else throw new Error ("добавить еду нельзя, холодильник выключен.")

	};

	this.getFood = function () {
		return food.slice();
	};

}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
console.log( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");

console.log( fridge.getFood() );
*/


// #4
// Добавьте в холодильник методы:
//
// Публичный метод filterFood(func), который возвращает всю еду, для которой func(item) == true
// Публичный метод removeFood(item), который удаляет еду item из холодильника.
// Код для проверки:
//
// var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood({
// 	title: "котлета",
// 	calories: 100
// });
// fridge.addFood({
// 	title: "сок",
// 	calories: 30
// });
// fridge.addFood({
// 	title: "зелень",
// 	calories: 10
// });
// fridge.addFood({
// 	title: "варенье",
// 	calories: 150
// });
//
// fridge.removeFood("нет такой еды"); // без эффекта
// console.log( fridge.getFood().length ); // 4
//
// var dietItems = fridge.filterFood(function(item) {
// 	return item.calories < 50;
// });
//
// dietItems.forEach(function(item) {
// 	console.log( item.title ); // сок, зелень
// 	fridge.removeFood(item);
// });
//
// console.log( fridge.getFood().length ); // 2
// В качестве исходного кода используйте решение предыдущей задачи.

/*
function Machine(power) {
	this._power = power;
	this._enabled = false;

	var self = this;

	this.enable = function() {
		self._enabled = true;
	};

	this.disable = function() {
		self._enabled = false;
	};
}

function Fridge(power) {
	Machine.apply(this, arguments);

	var food = [];

	this.addFood = function () {
		if (this._enabled) {
			for (var i = 0; i < arguments.length; i++) {
				if (food.length < power/100) {
					food.push(arguments[i])
				} else throw new Error ("Максимальное количество еды ограничено")
			}
		} else throw new Error ("добавить еду нельзя, холодильник выключен.")

	};

	this.getFood = function () {
		return food.slice();
	};

	this.filterFood = function (filter) {
		return food.filter(filter);
	};

	this.removeFood = function (item) {
		var index = food.indexOf(item);
		if ( index > -1 ) {
			food.splice(index, 1);
		}
	}
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
	title: "котлета",
	calories: 100
});
fridge.addFood({
	title: "сок",
	calories: 30
});
fridge.addFood({
	title: "зелень",
	calories: 10
});
fridge.addFood({
	title: "варенье",
	calories: 150
});

fridge.removeFood("нет такой еды"); // без эффекта
console.log( fridge.getFood().length ); // 4

var dietItems = fridge.filterFood(function(item) {
	return item.calories < 50;
});

dietItems.forEach(function(item) {
	console.log( item.title ); // сок, зелень
	fridge.removeFood(item);
});

console.log( fridge.getFood().length ); // 2
*/
























