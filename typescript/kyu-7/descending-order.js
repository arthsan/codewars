"use strict";
// https://www.codewars.com/kata/descending-order/train/typescript
exports.__esModule = true;
// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:
// Input: 21445 Output: 54421
// Input: 145263 Output: 654321
// Input: 1254859723 Output: 9875543221
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.descendingOrder = function (n) {
        var strN = n.toString().split('');
        var arrN = [];
        strN.forEach(function (element) {
            arrN.push(parseInt(element));
        });
        var result = parseInt(arrN.sort(function (a, b) { return (b - a); }).join(''));
        return result;
    };
    return Kata;
}());
exports.Kata = Kata;
console.log(Kata.descendingOrder(1254859723));
