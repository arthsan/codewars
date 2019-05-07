// https://www.codewars.com/kata/find-the-unique-number-1/train/javascript

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.

// The tests contain some very huge arrays, so think about performance.

const findUniq = (arr) => {
  let num = arr[0];
  if(num !== arr[1] && num !== arr[2]) {
    return num;
  }
  for(let i = 1; i < arr.length; i += 1) {
    if(arr[i] !== arr[i-1] && arr[i] !== arr[i+1]) {
      return arr[i]       
    }
  }
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));

// function findUniq(arr) {
//   const sortedArr = arr.sort((a, b) => a - b);
//   return sortedArr[0] === sortedArr[1] ? sortedArr[sortedArr.length - 1] : sortedArr[0];
// }