// https://www.codewars.com/kata/sum-of-positive/train/javascript

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

positiveSum = (arr) => {
  let sum = 0;
  for(let i = 0; i < arr.length; i += 1) {
    if(arr[i] > 0) {
      sum += arr[i]
    }
  }
  return sum;
}