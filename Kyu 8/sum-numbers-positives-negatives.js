// https://www.codewars.com/kata/count-of-positives-slash-sum-of-negatives/train/javascript
// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
// If the input array is empty or null, return an empty array.

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];



function countPositivesSumNegatives(input) {
    if(input === null || input.length === 0){
      return [];
    }
    let elem1 = 0;
    let elem2 = 0;
    let arrElem = [];
    for(let i = 0; i < input.length; i += 1){
      if(input[i] > 0){
        elem1 += 1;
      }
      if(input[i] < 0){
        elem2 += input[i];
      }
    }
    arrElem.push(elem1);
    arrElem.push(elem2);
  return arrElem;
  }


countPositivesSumNegatives(num)