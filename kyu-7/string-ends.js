// https://www.codewars.com/kata/string-ends-with/train/javascript

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    let fin = [];
    for(let i = str.length - ending.length; i < str.length; i += 1){
        fin.push(str[i]);
    }
    fin = fin.join('');
    if(ending == fin){
        return true
    }else {
        return false;
    }
  }