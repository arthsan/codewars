// https://www.codewars.com/kata/count-by-x/train/javascript

// Given an array of integers your solution should find the smallest integer.

let arr = [34, -345, -1, 100]

class SmallestIntegerFinder {
    findSmallestInt(args) {
        let smallest =  args[0];
        for(let i = 0; i < args.length; i += 1){
            if(smallest > args[i]){
                smallest = args[i];
            }
      }
      return smallest
    }
  }

const test = new SmallestIntegerFinder();
console.log(test.findSmallestInt(arr))