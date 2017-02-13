/**
 * Created by Dmitriy on 13.02.2017.
 */
// #1
// Напишите конструктор User для создания объектов:

// С приватными свойствами имя firstName и фамилия surname.
// С сеттерами для этих свойств.
// С геттером getFullName(), который возвращает полное имя.
// Должен работать так:

// function User() {
			/* ваш код */
// }

// var user = new User();
// user.setFirstName("Петя");
// user.setSurname("Иванов");

// console.log( user.getFullName() ); // Петя Иванов

/*
function User() {
	var firstName, surname = "";

	this.setFirstName = function (newFirstName) {
		firstName = newFirstName ;
	};
	this.setSurname = function (newSurname) {
		surname = newSurname;
	};
	this.getFullName = function () {
		return firstName + " " + surname;
	}
}

var user = new User();
user.setFirstName("Вася");
user.setSurname("Петров");
console.log( user.getFullName() );
*/


// #2
// Добавьте кофеварке геттер для приватного свойства power, чтобы внешний код мог узнать мощность кофеварки.

// Исходный код:

// function CoffeeMachine(power, capacity) {
			//...
// 	this.setWaterAmount = function(amount) {
// 		if (amount < 0) {
// 			throw new Error("Значение должно быть положительным");
// 		}
// 		if (amount > capacity) {
// 			throw new Error("Нельзя залить воды больше, чем " + capacity);
// 		}

// 		waterAmount = amount;
// 	};

// 	this.getWaterAmount = function() {
// 		return waterAmount;
// 	};

// }
// Обратим внимание, что ситуация, когда у свойства power есть геттер, но нет сеттера – вполне обычна.

// Здесь это означает, что мощность power можно указать лишь при создании кофеварки и в дальнейшем её можно прочитать, но нельзя изменить.

/*
function CoffeeMachine(power, capacity) {
	//...
	this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error("Значение должно быть положительным");
		}
		if (amount > capacity) {
			throw new Error("Нельзя залить воды больше, чем " + capacity);
		}

		waterAmount = amount;
	};

	this.getWaterAmount = function() {
		return waterAmount;
	};

	this.getPower = function () {
		return power;
	}
}

var coffe = new CoffeeMachine(1000, 800);

console.log( coffe.getPower() );
*/


// #3
// Добавьте кофеварке публичный метод addWater(amount), который будет добавлять воду.

// При этом, конечно же, должны происходить все необходимые проверки – на положительность и превышение ёмкости.

// Исходный код:

// function CoffeeMachine(power, capacity) {
// 	var waterAmount = 0;

// 	var WATER_HEAT_CAPACITY = 4200;

// 	function getTimeToBoil() {
// 		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
// 	}

// 	this.setWaterAmount = function(amount) {
// 		if (amount < 0) {
// 			throw new Error("Значение должно быть положительным");
// 		}
// 		if (amount > capacity) {
// 			throw new Error("Нельзя залить больше, чем " + capacity);
// 		}

// 		waterAmount = amount;
// 	};

// 	function onReady() {
// 		console.log( 'Кофе готов!' );
// 	}

// 	this.run = function() {
// 		setTimeout(onReady, getTimeToBoil());
// 	};

// }
// Вот такой код должен приводить к ошибке:

// var coffeeMachine = new CoffeeMachine(100000, 400);
// coffeeMachine.addWater(200);
// coffeeMachine.addWater(100);
// coffeeMachine.addWater(300); // Нельзя залить больше, чем 400
// coffeeMachine.run();

/*
function CoffeeMachine(power, capacity) {
	var waterAmount = 0;

	var WATER_HEAT_CAPACITY = 4200;

	function getTimeToBoil() {
		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}

	this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error("Значение должно быть положительным");
		}
		if (amount > capacity) {
			throw new Error("Нельзя залить больше, чем " + capacity);
		}

		waterAmount = amount;
	};

	function onReady() {
		console.log( 'Кофе готов!' );
	}

	this.run = function() {
		setTimeout(onReady, getTimeToBoil());
	};

	this.addWater = function(amount) {
		this.setWaterAmount(waterAmount + amount);
	};
}

var coffeeMachine = new CoffeeMachine(100000, 400);
coffeeMachine.addWater(200);
coffeeMachine.addWater(100);
coffeeMachine.addWater(300);
*/


// #4
// Обычно когда кофе готов, мы хотим что-то сделать, например выпить его.
// Сейчас при готовности срабатывает функция onReady, но она жёстко задана в коде:
//
// function CoffeeMachine(power, capacity) {
// 	var waterAmount = 0;
//
// 	var WATER_HEAT_CAPACITY = 4200;
//
// 	function getTimeToBoil() {
// 		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
// 	}
//
// 	this.setWaterAmount = function(amount) {
// 		// ... проверки пропущены для краткости
// 		waterAmount = amount;
// 	};
//
// 	this.getWaterAmount = function(amount) {
// 		return waterAmount;
// 	};
//
// 	function onReady() {
// 		console.log( 'Кофе готов!' );
// 	}
//
// 	this.run = function() {
// 		setTimeout(onReady, getTimeToBoil());
// 	};
//
// }
// Создайте сеттер setOnReady, чтобы код снаружи мог назначить свой onReady, вот так:
//
// var coffeeMachine = new CoffeeMachine(20000, 500);
// coffeeMachine.setWaterAmount(150);
//
// coffeeMachine.setOnReady(function() {
// 	var amount = coffeeMachine.getWaterAmount();
// 	console.log( 'Готов кофе: ' + amount + 'мл' ); // Кофе готов: 150 мл
// });
//
// coffeeMachine.run();
// P.S. Значение onReady по умолчанию должно быть таким же, как и раньше.
//
// P.P.S. Постарайтесь сделать так, чтобы setOnReady можно было вызвать не только до, но и после запуска кофеварки,
// то есть чтобы функцию onReady можно было изменить в любой момент до её срабатывания.

/*
function CoffeeMachine(power, capacity) {
	var waterAmount = 0;

	var WATER_HEAT_CAPACITY = 4200;

	function getTimeToBoil() {
		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}

	this.setWaterAmount = function(amount) {
		// ... проверки пропущены для краткости
		waterAmount = amount;
	};

	this.getWaterAmount = function(amount) {
		return waterAmount;
	};

	function onReady() {
		console.log( 'Кофе готов!' );
	}

	this.setOnReady = function (newOnReady) {
		onReady = newOnReady;
	};

	this.run = function() {
		setTimeout(function () {
			onReady();
		}, getTimeToBoil());
	};

}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(150);

coffeeMachine.setOnReady(function() {
	var amount = coffeeMachine.getWaterAmount();
	console.log( 'Готов кофе: ' + amount + 'мл' ); // Кофе готов: 150 мл
});

coffeeMachine.run();
*/


// #5
// Из внешнего кода мы хотели бы иметь возможность понять – запущена кофеварка или нет.
//
// Для этого добавьте кофеварке публичный метод isRunning(), который будет возвращать true, если она запущена и false, если нет.
//
// Нужно, чтобы такой код работал:
//
// var coffeeMachine = new CoffeeMachine(20000, 500);
// coffeeMachine.setWaterAmount(100);
//
// console.log( 'До: ' + coffeeMachine.isRunning() ); // До: false
//
// coffeeMachine.run();
// console.log( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true
//
// coffeeMachine.setOnReady(function() {
// 	console.log( "После: " + coffeeMachine.isRunning() ); // После: false
// });
// Исходный код возьмите из решения предыдущей задачи.

/*
function CoffeeMachine(power, capacity) {
	var waterAmount = 0;
	var timerId;

	var WATER_HEAT_CAPACITY = 4200;

	function getTimeToBoil() {
		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}

	this.setWaterAmount = function(amount) {
		// ... проверки пропущены для краткости
		waterAmount = amount;
	};

	this.getWaterAmount = function(amount) {
		return waterAmount;
	};

	function onReady() {
		console.log( 'Кофе готов!' );
	}

	this.setOnReady = function (newOnReady) {
		onReady = newOnReady;
	};

	this.run = function() {
		timerId = setTimeout(function () {
			timerId = null;
			onReady();
		}, getTimeToBoil());

	};

	this.isRunning = function () {
		return !!timerId;
	}
}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

console.log( 'До: ' + coffeeMachine.isRunning() ); // До: false

coffeeMachine.run();
console.log( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true

coffeeMachine.setOnReady(function() {
	console.log( "После: " + coffeeMachine.isRunning() ); // После: false
});
*/






















