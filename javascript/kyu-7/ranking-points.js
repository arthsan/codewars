// https://www.codewars.com/kata/ranking-position/train/javascript

// In some ranking people collects points. The challenge is sort by points and calulate position for every person. But remember if two or more persons have same number of points, they should have same position number and sorted by name (name is unique).

// For example: Input structure:

// [
//   {
//     name: "John",
//     points: 100,
//   },
//   {
//     name: "Bob",
//     points: 130,
//   },
//   {
//     name: "Mary",
//     points: 120,
//   },
//   {
//     name: "Kate",
//     points: 120,
//   },
// ]
// Output should be:

// [
//   {
//     name: "Bob",
//     points: 130,
//     position: 1,
//   },
//   {
//     name: "Kate",
//     points: 120,
//     position: 2,
//   },
//   {
//     name: "Mary",
//     points: 120,
//     position: 2,
//   },
//   {
//     name: "John",
//     points: 100,
//     position: 4,
//   },
// ]

function ranking(people) {
  let pos = {position: 0}
  let rank = 0
  for(let i = 0; i < people.length -1; i += 1) {
    if(people[i].points > people[i+1].points) {
      rank = people[i];
      console.log(rank)
    }  
  }
}

ranking([
  {
    name: "John",
    points: 100,
  },
  {
    name: "Bob",
    points: 130,
  },
  {
    name: "Mary",
    points: 120,
  },
  {
    name: "Kate",
    points: 120,
  },
])