'use strict';

// array destructuring
const japaneseRestaurant = {
  name: 'Banzai',
  location: '108 Markham Woods Rd, Longwood, USA',
  categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
  appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
  mainMenu: ['Sushi', 'Ramen', 'Tempura'],

  orderFood: function (appetizersIndex, mainMenuIndex) {
    return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
  },
};

const arr = [3, 5, 7];
const x1 = arr[0];
const x2 = arr[1];
const x3 = arr[2];

const [a, b, c] = arr; // деструктуризация массива arr, в квадратных скобках присваиваем переменным a, b и c значения из массива arr в соответсвии с их позициями(индексами)
console.log(a, b, c); // a = 3    b = 5     c = 7
console.log(arr); // все элементы массива на своем месте

let [main, secondary] = japaneseRestaurant.categories; // извлекаются первые 2 значения из массива catigories в обьекте japaneseRestaurant
// const [category1, , category3] = japaneseRestaurant.categories; // чтобы извлеч 1 и 3 элементы из массива нужно указать пустое место между ними
console.log(main, secondary);

// Swaping variables

// const temp = main;   // меняем местами значения в массиве с помощью временной переменной
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
[secondary, main] = [main, secondary]; // меняем местами значения в массиве с помощью деструктуризации
console.log(main, secondary);

// Returning 2 values from function
const [appetizer, mainFood] = japaneseRestaurant.orderFood(2, 1); // извлекаем 2 элемента из массива сразу в переменные
console.log(appetizer, mainFood);

// Nested destructuring (вложенная деструктуризация)
const nestedArr = [1, 2, [7, 9]];
// const [d, , f] = nestedArr;
// console.log(d, f);
const [f, , [d, e]] = nestedArr; // вложенная деструктуризация
console.log(f, d, e);

// Default values
const unknownArr = [3, 5];

const [g = 0, i = 0, j = 0] = unknownArr; // присваиваем дефолтное значение и если в массиве будет меньше значений чем мы извлекаем то переменным присвоиться 0 (или любое значение которое нам нужно)
console.log(g, i, j);
