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
  scored: ['Kroos', 'Benzema', 'Mingueza'],
  date: 'Apr 10th, 2021',
  odds: {
    team1: 1.48,
    draw: 2.53,
    team2: 4.25,
  },
};

//МОЁ РЕШЕНИЕ
// // 1.
// const [players1, players2] = [game.players[0], game.players[1]];
// console.log(players1, players2);

// // 2.
// const [goalkeeper, ...fieldPlayers] = players1;
// console.log(goalkeeper);
// console.log(fieldPlayers);

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const players1Total = [
//   ...players1,
//   'Marcelo',
//   'Isco',
//   'Asensio',
//   'Diaz',
//   'Odriozola',
// ];
// console.log(players1Total);

// // 5.
// const { team1, team2, draw } = game.odds;
// console.log(team1, draw, team2);

// // 6.
// const printGoals = function (...goodPlayers) {
//   console.log(...goodPlayers, goodPlayers.length);
// };
// printGoals('Mingueza', 'Messi', 'Modrich', 'Nacho');
// printGoals(...game.scored);

// 7.
// team1 > team2 ? console.log(game.team2) : console.log(game.team1);
// team1 < team2 && console.log(game.team1);
// team1 > team2 && console.log(game.team2);

////////////////////////////////////////////////////////////////////////////////////////////

// РЕШЕНИЕ НА КУРСЕ

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [goalkeeper, ...fieldPlayers] = players1;
console.log(goalkeeper, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Total = [
  ...players1,
  'Marcelo',
  'Isco',
  'Asensio',
  'Diaz',
  'Odriozola',
];
console.log(players1Total);

// 5.
const {
  odds: { team1, draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...goodPlayers) {
  console.log(`${goodPlayers.length} goals scored`);
};
printGoals('Mingueza', 'Messi', 'Modrich', 'Nacho');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log(game.team1);
team1 > team2 && console.log(game.team2);
