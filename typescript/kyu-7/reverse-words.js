"use strict";
// https://www.codewars.com/kata/reverse-words/train/typescript
exports.__esModule = true;
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
function reverseWords(str) {
    var rev = '';
    for (var i = str.length - 1; i >= 0; i -= 1) {
        rev += str[i];
    }
    return rev.split(' ').reverse().join(' ');
}
exports.reverseWords = reverseWords;
console.log(reverseWords('Example test'));
