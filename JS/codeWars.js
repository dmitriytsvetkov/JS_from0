/**
 * Created by Dmitriy on 13.12.2016.
 */
// #1
// 7 kyu
// Usually when you buy something, you're asked whether your credit card number,
// phone number or answer to your most secret question is still correct.
// However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.

/*
function maskify(cc) {
    var result = "";
    if(cc.length > 4) {
        var lastFour = cc.slice(-4); // gain last 4 chars
        var remainingStr = cc.slice(0, cc.length-4).split(""); // gain remaining and transform to array
        result = remainingStr.map(function () {
            return "#"; // replacing all items to "#"
        });
        return result.join("") + lastFour;
    } else return cc;
}
console.log( maskify("1223323232") );
*/


// #2
// 7 kyu
// Description:

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

//    Example:

// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

/*
function highAndLow(numbers){
    var numbersArr = numbers.split(" "); // gain array from string
    function compareNumeric(a, b) { // algorithm for .sort method
        return a - b;
    }
    numbersArr.sort(compareNumeric);
    return numbersArr[numbersArr.length-1] + " " + numbersArr[0];
}
console.log( highAndLow("324 23 -3 1") );
*/

// #3
// codecademy.com task
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

/*
var size = 8; //this is the variable setting

var board = ""; //this is the empty string we're going to add either ' ' , '#' or newline

for (var y = 0; y < size; y++) {   /!*in the outer loop we add newline to separate rows*!/
    for (var x = 0; x < size; x++) { /!*every inner loop represents a line, and alternatively it's adding either ' ' or '#' to the string that's being populated*!/
        if ((x + y) % 2 == 0)
            board += " ";
        else
            board += "#";
    }
    board += "\n";
}

console.log(board);
*/











