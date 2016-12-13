/**
 * Created by Dmitriy on 13.12.2016.
 */
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

function maskify(cc) {
    cc = cc.split("");
    for(var i = 0; i < cc.length - 4; i++){
        cc[i] = "#";
    }

    cc = cc.join("");
    return cc
}
console.log( maskify("123") );