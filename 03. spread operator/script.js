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
};

// Spread (...) operator

const arr = [1, 3, 5];

// Old bad approach
const newArr = [7, 9, arr[0], arr[1], arr[2]];
console.log(newArr);

// New approach with spread operator

const newArrSpread = [7, 9, ...arr]; // ...(три точки) - оператор spread, разворачивает все элементы массива arr и последовательно по одному добавляет их в новый массив
console.log(newArrSpread); // выводит новый массив [7, 9, 1, 3, 5]
console.log(...newArrSpread); // выводит числа по отдельности 7, 9, 1, 3, 5
console.log(7, 9, 1, 3, 5);

const newMenu = [...japaneseRestaurant.mainMenu, 'Miso Salmon']; // создаем новый массив со всеми элементами массива mainMenu и 1 новым элементом
console.log(newMenu);

// Array copying
const categoriesCopy = [...japaneseRestaurant.categories];

// Merge arrays (слияние массивов)
const menu = [...japaneseRestaurant.appetizers, ...japaneseRestaurant.mainMenu];
console.log(menu);

// Iterable (повторяемые, перечисляемые) - arrays, strings, maps, sets. OBJECT NOT ITERABLE

const greeting = 'Hey';
const greetingLetters = [...greeting, '!'];
console.log(greetingLetters);
console.log(...greeting);
// console.log(`${...greeting}`); // Can't do this!!!

// const ingridients = [
//   prompt(`Ingridient 1 for your sushi?`),
//   prompt(`Ingridient 2 for your sushi?`),
//   prompt(`Ingridient 3 for your sushi?`),
// ];
// console.log(ingridients);
// japaneseRestaurant.orderSushi(ingridients[0], ingridients[1], ingridients[2]);
// japaneseRestaurant.orderSushi(...ingridients);

// Objects
const newJapaneseRestaurant = {
  // Создается новый объект со всеми свойствами старого и 2 новыми
  foundationDate: 2011,
  ...japaneseRestaurant,
  owner: 'Suzuki',
};

console.log(newJapaneseRestaurant);

const japaneseRestaurantCopy = { ...japaneseRestaurant }; // создается копия объекта
japaneseRestaurantCopy.name = 'Suzuki Sushi'; // в копии меняется название
console.log(japaneseRestaurantCopy.name);
console.log(japaneseRestaurant.name);
