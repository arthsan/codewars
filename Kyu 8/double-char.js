// https://www.codewars.com/kata/double-char/train/javascript
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
    let o = ''
    for(let i = 0;i < str.length; i += 1){
      o = o + str[i] + str[i];
    }
  return o;
}




