'use strict';

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Можно записать названия внутренних свойств объекта обратившись к элементам массива с днями недели
const workingHours = {
  // синтаксис [] - квадратные скобки
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

  // Enhanced syntax of ES6 literals

  workingHours, // в объекте создается свойство с названием workingHours и ему присваивается внешний объект, тоесть он переносится

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

  orderRamen: function (noodle, ...otherIngs) {
    console.log(noodle);
    console.log(otherIngs);
  },
};
