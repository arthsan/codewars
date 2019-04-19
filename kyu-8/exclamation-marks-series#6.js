// https://www.codewars.com/kata/exclamation-marks-series-number-6-remove-n-exclamation-marks-in-the-sentence-from-left-to-right/train/javascript

// Remove n exclamation marks in the sentence from left to right. n is positive integer.

function remove(s, n){
    newStr = '';
    countExcl = 0;
    for(let i = 0; i < s.length; i += 1){
        if(s[i] === '!' && countExcl < n){
            countExcl += 1;
        }
        else{
            newStr += s[i];
        }
    }    return newStr
}

remove('"!!!Hi !!hi!!! !hi', 2)