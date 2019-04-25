// https://www.codewars.com/kata/consonant-value/train/javascript

// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings.

// For example: solve("zodiacs") = 26, because the consonant substrings are: z, d and cs with values z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26. --Note that the value of a = 1, b = 2 ... z = 26. --Vowels are a,e,i,o,u.

// For C: do not mutate input.

// More examples in test cases. Good luck!

function solve(s) {
  let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let alpha1 = alpha.toLocaleLowerCase().split('');
  let consonant = 'bcdfghjklmnpqrstvwxyz';
  let pos = 0;
  for(let i = alpha1.length -1; i >= 0; i -= 1) {
    for(let j = 0; j < s.length; j += 1) {
      if(alpha1[i] === s[j]) {
        if(pos < alpha1[i].length) {
          pos += alpha1.indexOf(alpha1[i]) + 1;
          console.log(pos);

        }

      }

    }

  }
  return;

  
};

solve('zurick')