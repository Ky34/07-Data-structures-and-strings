'use strict';

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const workingHours = {
  [weekDays[2]]: {
    open: 10,
    close: 23,
  },
  [weekDays[4]]: {
    open: 10,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0,
    close: 24,
  },
  [weekDays[6]]: {
    open: 12,
    close: 23,
  },
};

const japaneseRestaurant = {
  name: 'Banzai',
  location: '108 Markham Woods Rd, Longwood, USA',
  categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
  appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
  mainMenu: ['Sushi', 'Ramen', 'Tempura'],

  workingHours,

  orderFood(appetizersIndex, mainMenuIndex) {
    return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
  },

  foodDelivery({
    mainMenuIndex = 0,
    appetizersIndex = 0,
    address,
    deliveryTime = '18:00',
  }) {
    console.log(
      `Your order on the way to you! ${this.appetizers[appetizersIndex]} and ${this.mainMenu[mainMenuIndex]} will be arrived to ${address} at ${deliveryTime}`
    );
  },

  orderSushi: function (ing1, ing2, ing3) {
    console.log(`You have ordered sushi with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderRamen(noodle, ...otherIngs) {
    console.log(noodle);
    console.log(otherIngs);
  },
};

// Таки образом можно записывать сразу несколько пар ключ значение при создании структуры map()
const question = new Map([
  ['question', 'What is the most popular programming language for front-end?'],
  [1, 'JavaScript'],
  [2, 'Java'],
  [3, 'Python'],
  ['correctAnswer', 1],
  [true, 'Correct answer :D'],
  [false, 'This is incorrect :( Try again!'],
]);

console.log(question);
console.log(Object.entries(workingHours)); // возвращает структуру массива состоящего из внутренних массивов

// Converting objects to maps
const workingHoursMap = new Map(Object.entries(workingHours)); // таким способом можно преобразовать объект в структуру map()
console.log(workingHoursMap);

// Quiz app
console.log(question.get('question'));

// перебераем структуру map()  и выводим в консоль при условии если key число
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`${key}: ${value}`);
//   }
// }

// const userAnswer = Number(prompt('Choose the option number'));
// // console.log(question.get('correctAnswer'));
// console.log(question.get(question.get('correctAnswer') === userAnswer));

// Converting maps to arrays
console.log([...question]);

console.log(question.entries());
console.log([...question.keys()]); // распаковка ключей в массив
console.log([...question.values()]); // распаковка значений в массив
