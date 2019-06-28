// https://www.codewars.com/kata/remove-string-spaces/train/javascript

// Simple, remove the spaces from the string, then return the resultant string.

// function noSpace(x){
//   const splited = x.split(' ').join('');
//   return splited;
// }

noSpace = (x) => x.split(' ').join('');

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))