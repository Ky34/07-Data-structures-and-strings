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

// Property names (названия(ключи) свойств)
const props = Object.keys(workingHours); // выводит массив из ключей объекта
console.log(props);

console.log(`"Banzai" opens ${props.length} days in a week.`);

for (const day of props) {
  console.log(day);
}

// Property values (значения свойств)
const values = Object.values(workingHours);
console.log(values);

// Property names and values
const entries = Object.entries(workingHours); // получаем массив из массивов с парами ключ: значение из объекта
console.log(entries);

for (const entry of entries) {
  console.log(entry);
}
for (const [day, { open, close }] of entries) {
  console.log(
    `Restaurant "Banzai" opens on ${day} opens at ${open} and closes at ${close}`
  );
}
