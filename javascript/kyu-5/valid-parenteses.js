// https://www.codewars.com/kata/valid-parentheses/train/javascript

// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

const validParentheses = (parens) => {
  let count1 = 0;
  let count2 = 0;
  for(let i = 0; i < parens.length; i += 1) {
    if(parens[0] !== '(') {
        return false;
    }
    if(parens.lastIndexOf('(') === parens.length - 1) {
        return false;
    }
    if(parens[i] === '(' ){
        count1 += 1;
    }
    if(parens[i] === ')' ){
        count2 += 1;
    }
  }
    if(count1 !== count2) {
      return false;
    }
  return true;
}


validParentheses('(())()()()()()()()(())()()()')
