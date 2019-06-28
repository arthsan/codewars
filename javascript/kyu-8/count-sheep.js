// https://www.codewars.com/kata/if-you-cant-sleep-just-count-sheep/train/javascript

// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = (num) => {
    let sheep = ' sheep...';
    let sheepStr = '';
    if(num > 0){
        for(let i = 1; i <= num; i += 1){
            sheepStr += i + sheep;
        }
    }
    return sheepStr
}