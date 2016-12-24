/**
 * Created by Dmitriy on 24.12.2016.
 */
var row = 5, column = 5;
var arr = [];
for (var i = 0; i < column; i++){
    arr[i] = [];
    for (var j = 0; j < row; j++){
        arr[i][j] = false;
    }}


arr[2][2] = true;
console.log(arr);
govno(arr);
function govno(arr) {

    return arr;
}

function deadOrAlive () {
    var num = Math.floor( Math.random() * 10 );

    if (num > 0 && num < 3) {
        return 1; // клетка не меняется
    } else if (num > 3 && num < 6) {
        return 0; // клетка умирает
    } else return 2; // клетка рождается
}
console.log( deadOrAlive() );