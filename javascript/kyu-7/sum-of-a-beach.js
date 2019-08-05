// https://www.codewars.com/kata/sum-of-a-beach/train/javascript

// Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

// Examples
// sumOfABeach("WAtErSlIde")                    ==>  1
// sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
// sumOfABeach("gOfIshsunesunFiSh")             ==>  4 
// sumOfABeach("cItYTowNcARShoW")               ==>  0

const sumOfABeach = (beach) => {
  const water = ['water', 'sand', 'fish', 'sun'];
  let newBeach = beach.toLowerCase();
  let count = 0;
  let bb = [];
  for(let i = 0; i < water.length; i += 1) {
    bb = newBeach.split(water[i]);
    console.log(bb)
  }
};

sumOfABeach('gOfIshsunesunFiSh')