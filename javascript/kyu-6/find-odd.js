// https://www.codewars.com/kata/find-the-odd-int/train/javascript

// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  let arrCount = [];
  for(let i = 0; i < A.length; i += 1) {
    let count = 0;
    for(let j = 0; j < A.length; j += 1) {
      if(A[i] === A[j]) {
        count += 1;
      }
    }
    arrCount.push(count);
  }
  for(let k = 0; k < arrCount.length; k += 1) {
    if(arrCount[k] % 2 !== 0) {
      return A[k];
    }
  }
}

findOdd([1,2,3,1])