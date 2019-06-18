// https://www.codewars.com/kata/reversed-words/train/javascript

// Complete the solution so that it reverses all of the words within the string passed in.

function reverseWords(str){
  let rev = str.split(' ');
  let revPhrase = '';
  for(let i = rev.length -1; i >= 0; i -= 1) {
    revPhrase += `${rev[i]} `;
  }
  return revPhrase.trim();
}

reverseWords('[*Fn)=OTR8Wt; ~_T VRNk+6Agn9s\$AL8')