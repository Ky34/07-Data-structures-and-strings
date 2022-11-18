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

//
const menu = [...japaneseRestaurant.appetizers, ...japaneseRestaurant.mainMenu];

for (const food of menu) {
  // переберает все элементы массива помещая в переменную на каждом шаге значения из массива. Можно использовать ключевые слова break и continue
  console.log(food);
}

// выводит индекс элементов из массива
for (const food of menu.entries()) {
  console.log(food); // получаем список массивов в каждом из которых индекс и названия блюда
  console.log(`${food[0] + 1}. ${food[1]}`); // обращаемся к 0 элементу массива (это цифра индекс + 1) и 1 элемент это название блюда
}

// проводим деструктуризацию массива
for (const [index, food] of menu.entries()) {
  console.log(`${index + 1}. ${food}`); // обращаемся к элементам по названиям переменных
}

console.log([...menu.entries()]); // получаем массив, каждый елемент в котором это массив с индексом и названием блюда
