// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

// A wolf in sheep's clothing
// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

let shep = ["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]

function warnTheSheep(queue) {
    for(let i = 0; i < queue.length; i += 1){
        if(queue[i] === 'wolf'){
            num =  queue.length - i -1;
            if(num === 0){
                return 'Pls go away and stop eating my sheep'
            }
            return `Oi! Sheep number ${num}! You are about to be eaten by a wolf!`
        }
    }
}

warnTheSheep(shep)
