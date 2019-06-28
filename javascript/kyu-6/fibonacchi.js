// https://www.codewars.com/kata/fibonacci-reloaded/train/javascript

// And here is Fibonacci again. This time we want to go one step further. Our fib() function must be faster! Can you do it?

// In case you don't know, what the Fibonacci number is:

// The nth Fibonacci number is defined by the sum of the two previous Fibonacci numbers. In our case: fib(1) == 0 and fib(2) == 1. With these initial values you should be able to calculate each following Fibonacci number.

function fib(n) {
  let arrN = [0, 1];
  for(let i = 1; i <= n; i += 1) {
    arrN.push(arrN[i]+arrN[i-1]);
  }
  return arrN[n-1]
}

console.log(fib(3))