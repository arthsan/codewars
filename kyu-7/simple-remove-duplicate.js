// https://www.codewars.com/kata/simple-remove-duplicates/train/javascript

// In this Kata, you will remove the left-most duplicates from a list of integers and return the result.

// // Remove the 3's at indices 0 and 3
// // followed by removing a 4 at index 1
// solve([3, 4, 4, 3, 6, 3]); // => [4, 6, 3]
// More examples can be found in the test cases.

function solve(arr){
  let num = [];
  for(let i = arr.length -1; i >= 0; i -= 1){
      if(!num.includes(arr[i])){
          num.push(arr[i]);
      }
  }
  return num.reverse();
}


solve([3, 4, 4, 3, 6, 3])