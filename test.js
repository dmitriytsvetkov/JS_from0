// Это спецификация
/*
assert(value) – проверяет что value является true в логическом контексте.
assert.equal(value1, value2) – проверяет равенство value1 == value2.
assert.strictEqual(value1, value2) – проверяет строгое равенство value1 === value2.
assert.notEqual, assert.notStrictEqual – проверки, обратные двум предыдущим.
assert.isTrue(value) – проверяет, что value === true
assert.isFalse(value) – проверяет, что value === false
*/

describe("pow", function() {

  describe("возводит x в степень n", function() {

    function makeTest(x) {
      var expected = x * x * x;
      it("при возведении " + x + " в степень 3 результат: " + expected, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (var x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  it("при возведении в отрицательную степень результат NaN", function() {
    assert(isNaN(pow(2, -1)), "pow(2, -1) не NaN");
  });

  it("при возведении в дробную степень результат NaN", function() {
    assert(isNaN(pow(2, 1.5)), "pow(2, -1.5) не NaN");
  });

  describe("любое число, кроме нуля, в степени 0 равно 1", function() {

  function makeTest(x) {
    it("при возведении " + x + " в степень 0 результат: 1", function() {
      assert.equal(pow(x, 0), 1);
    });
  }

  for (var x = -5; x <= 5; x += 2) {
    makeTest(x);
  }

});
});


/*
describe("pow", function() { // describe(название, function() { ... })
                             // Задаёт, что именно мы описываем

  it("возводит в n-ю степень", function() { // В названии блока it человеческим языком описывается, 
                                            // что должна делать функция
    assert.equal(pow(2, 3), 8); // тест, который проверяет это.
                                // код внутри it должен выполняться без ошибок
  });

   it("при возведении 3 в 4ю степень равен 81", function() {
    assert.equal(pow(3, 4), 81);
  });
// Генератор чисел в 3 степени для тестов
    function makeTest(x) {
    var expected = x * x * x;
    it("при возведении " + x + " в степень 3 результат: " + expected, function() {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (var x = 1; x <= 5; x++) {
    makeTest(x);
  }

});
*/