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

// #4
// Fellow code warrior, we need your help! We seem to have lost one of our array elements,
// and we need your help to retrieve it! Our array, superImportantArray, was supposed to
// contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

// Write a function called getMissingElement that accepts an array of unique integers between 0 and 9 (inclusive), and returns the missing element

/*
function getMissingElement(superImportantArray) {
    var result = 0;
    for (var i = 0; i < superImportantArray.length; i++) {
        result += superImportantArray[i];
    }
    return 45 - result;
}

console.log( getMissingElement( [0, 5, 1, 3, 2, 9, 7, 6, 4] ) );
*/

// #5
// Your task is to add a new property usersAnswer to every object in the array questions.
// The value of usersAnswer should be set to null. The solution should work for array of any length.

/*
var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

function addUsersAnswer(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].usersAnswer = null;
    }
}

addUsersAnswer(questions);
*/



// #6
// Create a function, getVillainName, that returns a villain name based on the user's birthday.
// (The birthday will be passed to the function as a valid Date object, so for simplicity, there's no need to worry about converting strings to dates.)
// The first name will come from the month, and the last name will come from the last digit of the date.
// Month -> first name

// January -> "The Evil"
// February -> "The Vile"
// March -> "The Cruel"
// April -> "The Trashy"
// May -> "The Despicable"
// June -> "The Embarrassing"
// July -> "The Disreputable"
// August -> "The Atrocious"
// September -> "The Twirling"
// October -> "The Orange"
// November -> "The Terrifying"
// December -> "The Awkward"
// Last digit of date -> last name

// 0 -> "Mustache"
// 1 -> "Pickle"
// 2 -> "Hood Ornament"
// 3 -> "Raisin"
// 4 -> "Recycling Bin"
// 5 -> "Potato"
// 6 -> "Tomato"
// 7 -> "House Cat"
// 8 -> "Teaspoon"
// 9 -> "Laundry Basket"

// The returned value should be a string in the form of "First Name Last Name".
// For example, a birthday of November 18 would return "The Terrifying Teaspoon"

/*
function getVillainName(birthday){
    var month = birthday.toLocaleString("en-us", { month: "long" });
    var day = birthday.toLocaleString("en-us", { day: "numeric" });
    switch(month) {
        case "January" : month = "The Evil"; break;
        case "February" : month = "The Vile"; break;
        case "March" : month = "The Cruel"; break;
        case "April" : month = "The Trashy"; break;
        case "May" : month = "The Despicable"; break;
        case "June" : month = "The Embarrassing"; break;
        case "July" : month = "The Disreputable"; break;
        case "August" : month = "The Atrocious"; break;
        case "September" : month = "The Twirling"; break;
        case "October" : month = "The Orange"; break;
        case "November" : month = "The Terrifying"; break;
        case "December" : month = "The Awkward"; break;
        default : return "Error";
    }
    switch (day % 10) {
        case 0 : day = "Mustache"; break;
        case 1 : day = "Pickle"; break;
        case 2 : day = "Hood Ornament"; break;
        case 3 : day = "Raisin"; break;
        case 4 : day = "Recycling Bin"; break;
        case 5 : day = "Potato"; break;
        case 6 : day = "Tomato"; break;
        case 7 : day = "House Cat"; break;
        case 8 : day = "Teaspoon"; break;
        case 9 : day = "Laundry Basket"; break;
        default : return "Error";
    }
    return month + " " + day;
}
console.log ( getVillainName(new Date()) );
*/


// #7
// Make the sum() function return the sum of the values in the passed in array. Your solution must use the reduce()
// function of the built-in javascript Array object. If you're not familiar with reduce(), reading over the documentation may help.

/*
function sum(arr) {
    return arr.reduce(function(sum, current) {
        return sum + current
    });
}
*/


// #8
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment,
// so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App
// on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions
// to walk (eg. ['n', 's', 'w', 'e']). You know it takes you one minute to traverse one city block, so create a function that will
// return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will,
// of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only).
// It will never give you an empty array (that's not a walk, that's standing still!).


function isValidWalk(walk) {
    if (walk.length != 10) {
        return false;
    }
    var y = 0;
    var x = 0;
    for (var i = 0; i < walk.length; i++) {
        switch(walk[i]) {
            case "n" : y += 1; break;
            case "s" : y -= 1; break;
            case "e" : x += 1; break;
            case "w" : x -= 1; break;
        }
    }
    return (y == 0 && x == 0)
}

console.log( isValidWalk( ['e','w','e','w','n','s','n','s','e','w'] ) );
