// https://www.codewars.com/kata/sum-mixed-array/train/javascript

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


var arr = [9, 3, '7', '3']

function sumMix(x){
    let sum = 0;
    for(let i = 0; i < x.length; i += 1){
        let strNun = parseFloat(x[i]);
        sum += strNun;
    }
    return sum
}

sumMix(arr)