// https://www.codewars.com/kata/count-by-x/train/javascript

// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.


let strarr = ["zone", "abigail", "theta", "form", "libe", "zas"];

function longestConsec(strarr, k){
    let big = '';
    let num = [];
    for(let i = 0; i < strarr.length ; i += 1) {
        if(strarr[i].length > big.length) {
            big = strarr[i]; 
        }
    }
    if(k >= strarr.indexOf(big)){
        for(let j = strarr.indexOf(big); j < k + strarr.indexOf(big); j += 1){
            num.push(strarr[j]);
        }
    }
    if(k < strarr.indexOf(big)) {
        for(let h = strarr.indexOf(big); h < k +strarr.indexOf(big); h += 1){
            num.push(strarr[h])
        }
    }
    console.log(num)
    num.splice(k);
    return num.join('')
}        

console.log(longestConsec(strarr, 2))