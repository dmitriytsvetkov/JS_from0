/**
 * Created by Dmitriy on 24.12.2016.
 */

function creatingFirstArr(row,column) {
    var newArr = [];
    for (var i = 0; i < row; i++){
        newArr[i] = [];
        for (var j = 0; j < column; j++){
            newArr[i][j] = randomElem(); // заполняем рандомными элементами
        }}
    return newArr;
}

function randomElem() {
    var n = Math.floor( (Math.random() * 10 ) );
    return (n < 5) ? 1 : 0;
}



var model = creatingFirstArr(10,10);

function createEmpty(row, column) { // функция создания копии исходного массива со всеми мертвыми клетками
    var emptyArr = [];
    for (var i = 0; i < row; i++){
        emptyArr[i] = [];
        for (var j = 0; j < column; j++){
            emptyArr[i][j] = 0;
        }}
    return emptyArr;
}

function updateModel(matrix) {
    var secondArr = createEmpty(10, 10);

    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            function leftElem() {return matrix[i][j - 1];}
            function topLeftElem() {return matrix[i - 1][j - 1];}
            function topElem () {return matrix[i - 1][j];}
            function topRightElem () {return matrix[i - 1][j + 1];}
            function rightElem () {return matrix[i][j + 1];}
            function bottomRightElem () {return matrix[i + 1][j + 1];}
            function bottomElem () {return matrix[i + 1][j];}
            function bottomLeftElem () {return matrix[i + 1][j - 1];}

            function checkLife(num, cond, i, j) { // num - подсчет количества живых соседей, cond - мертвая или живая клетка
                if (cond == 1) {
                    if (num < 2) {
                        secondArr[i][j] = 0; // Живая клетка у которой меньше двух соседей умерает от одиночества.
                    } else if (num > 3) {
                        secondArr[i][j] = 0; // Живая клетка у которой больше 3 соседей умирает от перенаселения.
                    } else if (num >= 2 && num <= 3) { // Живая клетка у которой 2 или 3 соседа живет до следующего хода.
                        secondArr[i][j] = 1;
                    }
                } else if (cond == 0) {
                    if (num == 3) {
                        secondArr[i][j] = 1; // Мертвая клетка у которой ровно 3 живых соседа становаится живой (рождается).
                    } else secondArr[i][j] = 0;
                }
            }


            var tmp = 0; // подсчет количества живых соседей
            var deadOrAlive = matrix[i][j]; // берем клетку: 0 - мертвая; 1 - живая
            if (i == 0) {
                if (j == 0) {
                    tmp = rightElem() + bottomRightElem() + bottomElem();
                    checkLife(tmp, deadOrAlive, i, j);
                }
                else if (j > 0 && j < matrix[i].length - 1) {
                    tmp = leftElem() + rightElem() + bottomRightElem() + bottomElem() + bottomLeftElem();
                    checkLife(tmp, deadOrAlive, i, j);
                } else if (j == matrix[i].length - 1) {
                    tmp = leftElem() + bottomElem() + bottomLeftElem();
                    checkLife(tmp, deadOrAlive, i, j);
                }
            } else if (i > 0 && i < matrix.length - 1) {
                if (j == 0) {
                    tmp = topElem() + topRightElem() + rightElem() + bottomRightElem() + bottomElem();
                    checkLife(tmp, deadOrAlive, i, j);
                } else if (j > 0 && j < matrix[i].length - 1) {
                    tmp = leftElem() + topLeftElem() + topElem() + topRightElem() + rightElem() + bottomRightElem() + bottomElem() + bottomLeftElem();
                    checkLife(tmp, deadOrAlive, i, j);
                } else if (j == matrix[i].length - 1) {
                    tmp = leftElem() + topLeftElem() + topElem() + bottomElem() + bottomLeftElem();
                    checkLife(tmp, deadOrAlive, i, j);
                }
            } else if (i == matrix.length - 1) {
                if (j == 0) {
                    tmp = topElem() + topRightElem() + rightElem();
                    checkLife(tmp, deadOrAlive, i, j);
                } else if (j > 0 && j < matrix[i].length - 1) {
                    tmp = leftElem() + topLeftElem() + topElem() + topRightElem() + rightElem();
                    checkLife(tmp, deadOrAlive, i, j);
                } else if (j == matrix[i].length - 1) {
                    tmp = leftElem() + topLeftElem() + topElem();
                    checkLife(tmp, deadOrAlive, i, j);
                }
            }
        }
    }

    return secondArr;
}

function createDivs(size) {
    var iDiv = document.createElement('div');
    iDiv.id = 'outer';
    iDiv.className = 'outer';
    document.getElementsByTagName('body')[0].appendChild(iDiv);


    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            // Now create and append to iDiv
            var innerDiv = document.createElement('div');
            innerDiv.id = i+"-"+j;
            innerDiv.className = 'inner';

            // The variable iDiv is still good... Just append to it.
            iDiv.appendChild(innerDiv);
        }
    }
}

function updateView(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            var div = document.getElementById(i+"-"+j);
            var value = matrix[i][j];
            if (value > 0) {
                div.style.backgroundColor = "red";
            } else {
                div.style.backgroundColor = "white";
            }
        }
    }
}

function singleRound() {
    model = updateModel(model);
    updateView(model);
}


createDivs(10);

setInterval(singleRound, 1000);









/*
var leftElem = matrix[i][j - 1];
var topLeftElem = matrix[i - 1][j - 1];
var topElem = matrix[i - 1][j];
var topRightElem = matrix[i - 1][i + 1];
var rightElem = matrix[i][j + 1];
var bottomRightElem = matrix[i + 1][j + 1];
var bottomElem = matrix[i + 1][j];
var bottomLeftElem = matrix[i + 1][j - 1];
console.log(leftElem + ", " + topLeftElem + ", " + topElem + ", " + topRightElem + ", " + rightElem + ", " + bottomRightElem + ", " + bottomElem + ", " + bottomLeftElem)
*/
