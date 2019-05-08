// https://www.codewars.com/kata/multiples-of-3-or-5/train/javascript

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

const solution = (number) => {
    let arrNum = [];
    let sum = 0;
    for(let i = 1; i < number; i += 1) {
        if(i % 3 == 0) {
            arrNum.push(i)
        }else if(i % 5 === 0) {
            arrNum.push(i)
        }else if(i % 5 === 0 && number % 3 === 0) {
            arrNum.push(i)
        }
    }for(let j = 0; j < arrNum.length; j += 1) {
        sum += arrNum[j];
    }return sum;
}


solution(10)