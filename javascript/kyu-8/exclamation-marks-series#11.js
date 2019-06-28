// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
let fa = 'Ola, mundo'

function replace(s){
   return s.replace(/(a|e|i|o|u)/gi,'!')
}

console.log(replace(fa))