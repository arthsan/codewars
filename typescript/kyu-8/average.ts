// https://www.codewars.com/kata/calculate-average/train/typescript

// Write function avg which calculates average of numbers in given list.

export function find_average(array) {
  let sum = 0;
  array.forEach(element => {
    sum += element; 
  });
  return sum/array.length;
}