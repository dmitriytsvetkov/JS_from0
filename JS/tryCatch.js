/**
 * Created by Dmitriy on 07.02.2017.
 */
// #1
// Напишите интерфейс, который принимает математическое выражение (в prompt) и результат его вычисления через eval.

// При ошибке нужно выводить сообщение и просить переввести выражение.

// Ошибкой считается не только некорректное выражение, такое как 2+, но и выражение, возвращающее NaN, например 0/0.

/*
var expr, res;

while(true) {
	expr = prompt("Введите выражение: ", "");
	if (expr == null) {
		break;
	}
	try {
		res = eval(expr);
		if(isNaN(res)) {
			throw new Error("Результат неопределен");
		}
		break;
	} catch (e) {
		alert("Ошибка: " + e.message + " , повторите ввод")
	}
}

alert(res);
*/


