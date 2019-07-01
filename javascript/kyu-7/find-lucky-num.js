// https://www.codewars.com/kata/find-the-lucky-numbers/train/javascript

// Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.

// For example,

// ghci> filterLucky [1,2,3,4,5,6,7,68,69,70,15,17]
// [7,70,17]
// Don't worry about bad input, you will always receive a finite list of integers.

var filterLucky=x=>{
  let filt = x.filter(elem => elem.toString().includes('7'));
  return filt;
}


// const filterLucky = array => array.filter(elemento => elemento.toString().includes('7'));


console.log(filterLucky([1,2,3,4,5,6,7,68,69,70,15,17]))