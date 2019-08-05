// https://www.codewars.com/kata/mexican-wave/train/javascript

// Introduction
//  	The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.
// The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. 

const wave = (str) => {
  let arrStr = [];
  let newStr = str.toLowerCase();
  const wave = str.length;
  for(let i = 0; i < wave; i += 1) {
    if (newStr[i] === ' ') {
      let mexicanWave = newStr.replace(newStr[i], newStr[i].toUpperCase());
    }
    else {
      let mexicanWave = newStr.substr(0, i) + newStr[i].toUpperCase() + newStr.substr(i + 1);
      arrStr.push(mexicanWave);
    }
  }
  return arrStr;
}

wave('hello world');