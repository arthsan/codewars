// https:/www.codewars.com/kata/sum-of-positive/train/typescript

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

export function positiveSum(arr:number[]):number {
  let sum = 0;
  arr.forEach(element => {
    if(element > 0) {
      sum += element;
    }
  });
  return sum;
}