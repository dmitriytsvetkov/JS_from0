// Сумма чисел до n числа
function sumTo(n) {
	if (n != 0) {
		return n + sumTo(n-1);
	} else return 1;
	
}

alert(sumTo(100));





/* цикл
function sumTo(n) {
	var result = 0;
	var i = n;
	while (i != 0) {
		result = result + i;
		i--;
	}
	alert(result);
}
sumTo(100);
*/



/*
// Рекурсия функции внутри себя
function pow(num, exp) {
	if ( exp != 1) {
		return num * pow(num, exp-1);
	} else return num;
}

alert( pow(2,99999999) );
*/