// https://www.codewars.com/kata/reverse-a-number/train/javascript

// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1

function reverseNumber(n) {
    let reverse = n.toString().split('').reverse().join('');
    return Math.sign(n) * parseInt(reverse);
}

const reverseNumber = (n) => {
    let reversed = '';;
    const string = n.toString()
    for(let i = string.length - 1; i >= 0; i -= 1) {
        reversed += string[i]
    }
    return n > 0 ? parseInt(reversed, 10) : -parseInt(result, 10)
}
