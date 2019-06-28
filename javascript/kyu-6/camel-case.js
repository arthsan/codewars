// https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript

// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)

String.prototype.camelCase=function(){
  let arrStr = this.split(' ');
  let camel = [];
  let uper;
  for (let i = 0; i < arrStr.length; i += 1){
    if (i >= 0) {
      if (arrStr[i][0] !== undefined ) {
      uper = (arrStr[i][0].toUpperCase() + arrStr[i].slice(1));
      camel.push(uper)
      }
    }
  }return camel.join('')
}