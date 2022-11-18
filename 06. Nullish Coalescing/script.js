'use strict';

const japaneseRestaurant = {
  name: 'Banzai',
  location: '108 Markham Woods Rd, Longwood, USA',
  categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
  appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
  mainMenu: ['Sushi', 'Ramen', 'Tempura'],

  workingHours: {
    wed: {
      open: 10,
      close: 23,
    },
    fri: {
      open: 10,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
    sun: {
      open: 12,
      close: 23,
    },
  },

  orderFood: function (appetizersIndex, mainMenuIndex) {
    return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
  },

  foodDelivery: function ({
    // в функцию передается 1 аргумент - объект, и сразу деструктурируется
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

  orderRamen: function (noodle, ...otherIngs) {
    console.log(noodle);
    console.log(otherIngs);
  },
};

// Nullish Coalescing operator (оператор нулевого слияния)

japaneseRestaurant.guestsNumber = 0;

const guests = japaneseRestaurant.guestsNumber || 5;
console.log(guests);

// Оператор нулевого сляния (??) работает как и оператор или || но он работает с нулевыми значениями вместо false значений
// Nullish values(нулевые значения): null and undefined (без 0 и '')
const guests1 = japaneseRestaurant.guestsNumber ?? 5; // переменной присваивается 0 так как 0 это не null и не undefined
console.log(guests1);
