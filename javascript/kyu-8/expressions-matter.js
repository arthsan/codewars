// https://www.codewars.com/kata/expressions-matter/train/javascript

// Task
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ().

// Consider an Example :
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is *9***.

// Notes
// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// _It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You *cannot swap the operands. For instance, in the given example *you cannot get expression (1 + 3) * 2 = 8.

function expressionMatter(a, b, c) {
    let exp = 0;
    if(a >= 1 && b >= 1 && c >= 1 & a <= 10 && b <= 10 && c <= 10){
        if(a * b * c > exp){
            exp = a * b * c;
        }if(a + b * c > exp){
            exp = a + b * c;
        }if((a + b) * c > exp){
            exp = (a + b) * c;
        }if(a + b + c > exp){
            exp = a + b + c;
        }if((a * (b + c) > exp)){
            exp = a * (b + c)
        }
    }
    return exp
}


expressionMatter(5,1,3)