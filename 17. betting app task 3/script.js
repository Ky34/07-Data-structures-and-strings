'use strict';

const events = new Map([
  [19, 'Goal'],
  [21, 'Substitution'],
  [43, 'Goal'],
  [56, 'Substitution'],
  [69, 'Yellow card'],
  [73, 'Substitution'],
  [75, 'Yellow card'],
  [79, 'Substitution'],
  [81, 'Red card'],
  [93, 'Goal'],
]);

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

// РЕШЕНИЕ НА КУРСЕ

// 1.
const gameEvents = [...new Set(events.values())];
console.log(gameEvents);

// 2.
events.delete(75);
console.log(events);

// 3.
console.log(`On average, an event happened every ${90 / events.size} minutes`);

// 4.

for (const [key, value] of events) {
  const half = key <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${key}: ${value}`);
}

// МОЁ РЕШЕНИЕ

// // 1.
// const gameEvents = [...new Set(events.values())];
// console.log(gameEvents);

// // 2.
// events.delete(75);
// console.log(events);

// // 3.
// console.log(`On average, an event happened every ${90 / events.size} minutes`);

// 4.
// for (const [key, value] of events) {
//   key <= 45
//     ? console.log(`[FIRST HALF] ${key}: ${value}`)
//     : console.log(`[SECOND HALF] ${key}: ${value}`);
// }
