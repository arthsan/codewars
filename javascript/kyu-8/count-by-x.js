// https://www.codewars.com/kata/count-by-x/train/javascript

// Create a function with two arguments that will return a list of length (n) with multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

function countBy(x , n){
    var z = [];
    let x1 = x;
    for(let i = 0; i < n; i += 1){
        z.push(x)
        x += x1;
    }
    return z
}

console.log(countBy(2, 5))