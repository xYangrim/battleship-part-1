// console.log(Math.random() * 3);
// console.log(Math.floor((Math.random() * 3)))

// const input = "^%#$^"
// const regex = /^([A-Za-z])(\d+)$/; // Regex to match input like 'A2'
// const match = input.match(regex);

// console.log(match)

// let pastAttacks = [];

// function parseUserInput(input) {
//     const regex = /^([A-Za-z])(\d+)$/; // Regex to match input like 'A2'
//     const match = input.match(regex);
    // console.log(match)
  
//     if (match) {
//       pastAttacks.push(input);
//       const col = match[1].toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
//       const row = parseInt(match[2]) - 1;
  
//     if (row >= 0 && col >= 0) {
//         console.log(`row is : ${row} | col is ${col}`)
//         return [row, col];
//       }
//     }
  
//     return [-1, -1]; // Invalid input
//   }

//   console.log(parseUserInput("B6"));
//   console.log(pastAttacks);
//   console.log(pastAttacks.includes("B6"));


// let shipsRemaining = 5;
// const test = shipsRemaining += 1;

// console.log(--shipsRemaining);

// for (let i = 3; i > 0; i--) {
//     setTimeout(() => {
//       console.log(`${i}`);
//     }, 2000 * (3 - i));
//   };  


let str = "a2".toUpperCase();

console.log(str);