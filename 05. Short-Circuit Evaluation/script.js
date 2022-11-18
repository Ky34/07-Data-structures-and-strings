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

// Вычисление логических выражений по сокращенной схеме (Short-Circuit Evaluation)
////////////////////////////////////////////////////////////////////////////////////////////////
//  AND (&&) operator. Use any data types, return any data types, Short-Circuit Evaluation

// по сокращенной схеме логический оператор и && возвращает первое false значение, потому что нет смысла проверять остальные, так как оператор и && возвращает false если хотя бы одно из условий(значений) false
console.log(0 && 'Hello'); // вернет 0
// Если же оба значения true то оператор возвращает последнее значение в цепочке
console.log(1 && 'Hey'); // вернет 'Hey'
console.log('hey' && 34 && 0 && 44 && null); // вернет 0

if (japaneseRestaurant.orderRamen) {
  japaneseRestaurant.orderRamen('Something');
}

japaneseRestaurant.orderRamen && japaneseRestaurant.orderRamen('Something'); // если у объекта не существует свойства(метода) orderRamen, то дальше код не будет выполнятся, если же существует то выполняется вызов метода

//////////////////////////////////////////////////////////////////////////////////////////////////
//  OR (||) operator. Use any data types, return any data types, Short-Circuit Evaluation

// по сокращенной схеме логический оператор или || возвращает первое правдивое значение, потому что нет смысла проверять остальны, так как оператор или || возвращает true если хотя бы одно из условий(значений) true
console.log(5 || 'Hello'); // вернет 5
console.log('' || 'Hello'); // вернет 'Hello', так как пустая строка false значение
console.log(true || 0); // вернет true
console.log(undefined || null); // вернет null, так как undefined является false значением, js идет к следующеми и возвращает его даже если оно false

console.log(undefined || '' || 0 || 'Hey' || 23 || null); // возвращает 'Hey' так как в этой цепочке оно первое true значение

// japaneseRestaurant.guestsNumber = 0;
// Будет работать некорректно если значение известно и равно 0
const guests = japaneseRestaurant.guestsNumber
  ? japaneseRestaurant.guestsNumber
  : 5;
console.log(guests);

const guests1 = japaneseRestaurant.guestsNumber || 5; // если в объекте есть свойство guestsNumber присваивает переменной его значение, если нет присваеивет переменной 5

console.log(guests1);
