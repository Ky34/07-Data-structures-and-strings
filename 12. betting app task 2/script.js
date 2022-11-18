'use strict';

const game = {
  team1: 'REAL MADRID',
  team2: 'BARCELONA',
  players: [
    [
      'Courtois',
      'Vazquez',
      'Militao',
      'Nacho',
      'Mendy',
      'Casemiro',
      'Valverde',
      'Modrich',
      'Kroos',
      'Vinicius',
      'Benzema',
    ],
    [
      'Stegen',
      'Mingueza',
      'Araujo',
      'Lenglet',
      'Dest',
      'Busquets',
      'Jong',
      'Alba',
      'Messi',
      'Pedri',
      'Dembele',
    ],
  ],
  score: '2:1',
  scored: ['Kroos', 'Benzema', 'Mingueza', 'Kroos'],
  date: 'Apr 10th, 2021',
  odds: {
    team1: 1.48,
    draw: 2.53,
    team2: 4.25,
  },
};

// РЕШЕНИЕ НА КУРСЕ

// 1.
for (const [index, name] of game.scored.entries()) {
  // console.log(entry);
  console.log(`Goal ${index + 1} - ${name}`);
}

// 2.
let oddSum = 0;
let odds = Object.values(game.odds);
for (const odd of odds) {
  oddSum += odd;
}
console.log(oddSum / odds.length);

// 3.
for (const [teamName, odd] of Object.entries(game.odds)) {
  // console.log(name, odd);
  const mutableText =
    teamName === 'draw' ? 'draw' : `${game[teamName]} victory`;
  console.log(`Rate for ${mutableText}: ${odd}`);
}

// 4.
const goalScorers = {};
for (const player of game.scored) {
  goalScorers[player] ? goalScorers[player]++ : (goalScorers[player] = 1);
}
console.log(goalScorers);

// МОЁ РЕШЕНИЕ

// // 1.
// for (const [goalNumber, playerName] of game.scored.entries()) {
//   console.log(`Goal ${goalNumber + 1} - ${playerName}`);
// }

// // 2.
// const values = Object.values(game.odds);
// // console.log(values);
// let sum = 0;
// for (let i = 0; i < values.length; i++) {
//   sum += values[i];
// }
// console.log(sum / values.length);

// // 3.
// const drawValue = Object.keys(game.odds);
// console.log(`Rate for ${game.team1} victory: ${game.odds.team1}`);
// console.log(`Rate for ${drawValue[1]}: ${game.odds.draw}`);
// console.log(`Rate for ${game.team2} victory: ${game.odds.team2}`);

// // 4.
// let scorers = game.scored;
// console.log(scorers);
// const goalScorers = {
//   [scorers[0]]: 1,
//   [scorers[1]]: 1,
//   [scorers[2]]: 1,
// };
// console.log(goalScorers);
