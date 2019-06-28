// https://www.codewars.com/kata/power-of-two/train/typescript

// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.

// Examples
// power_of_two?(1024) # true
// power_of_two?(4096) # true
// power_of_two?(333)  # false
// Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.

export function isPowerOfTwo(n: number): boolean {
  if(n === 0) {
    return false;
  }
  for(let i = 0; i < n; i += 1) {
    if(n === 1) {
      return true;
    }
    if(n > 0 && n % 2 === 0) {
      n = n / 2;
    }else {
      return false;
    }
  }
  return true;
}
