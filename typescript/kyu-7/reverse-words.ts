// https://www.codewars.com/kata/reverse-words/train/typescript

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

export function reverseWords(str: string): string {
  let rev = '';
  for(let i = str.length - 1; i >= 0; i -= 1) {
    rev += str[i];
  }
  return rev.split(' ').reverse().join(' ');
}

console.log(reverseWords('Example test'))