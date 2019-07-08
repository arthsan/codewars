// https://www.codewars.com/kata/descending-order/train/typescript

// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421

// Input: 145263 Output: 654321

// Input: 1254859723 Output: 9875543221

export class Kata {
  static descendingOrder(n: number) {
    let strN = n.toString().split('');
    let arrN = [];
    strN.forEach(element => {
      arrN.push(parseInt(element));
    });
    const result = parseInt(arrN.sort((a,b) => (b-a)).join('')); 
    return result;
  }
}

console.log(Kata.descendingOrder(1254859723))