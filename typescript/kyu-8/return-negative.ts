// https://www.codewars.com/kata/return-negative/train/typescript

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Example:

// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0

export const makeNegative = (num: number): number => {
  if(num < 0) return num;
  return num * -1
};