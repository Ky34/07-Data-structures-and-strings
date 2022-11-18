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
    // передаем лапшу и с помощью паттерна ...rest другие ингридиенты
    console.log(noodle);
    console.log(otherIngs);
    console.log(
      `You have ordered ${this.mainMenu[2]} with ${noodle} and ${otherIngs}`
    );
  },
};

////////////////////////////////////////////////////////////////////////////////////////////////

// 1. Rest pattern with destructuring (патерн rest при деструктуризации)

// Rest operator with arrays

// This is spread operator, because ... are on the right side of =
const arr = [1, 2, ...[3, 4]]; // ... справа от знака присваивания (=) - оператор spread

// This is rest operator, because ... are on the left side of =
const [a1, a2, ...items] = [1, 2, 3, 4]; // ... слева от знака присваивания (=) - оператор rest, обьеденяет оставшиеся элементы после деструктуризации массива в отдельный массив 1 2 [3, 4]

console.log(a1, a2, items);

const [seaweed, , edamame, ...otherFood] = [
  // ...otherFood собирает в массив остальные элементы после edamame (оставшиеся элементы appetizers и все эелементы ,mainMenu)
  ...japaneseRestaurant.appetizers,
  ...japaneseRestaurant.mainMenu,
];
console.log(seaweed, edamame, otherFood);

// Rest operator with objects
const { sat, sun, ...weekDays } = japaneseRestaurant.workingHours; // получим 2 обьекта sat и sun и объект из оставшихся свойств
console.log(sat, sun, weekDays);

//////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Rest pattern with functions (патерн rest в функциях)

const sum = function (...nums) {
  // патерн rest берет передаваемые значения и упаковывает их в массив, в итоге в функцию передается массив
  let sumNums = 0;
  for (let i = 0; i < nums.length; i++) {
    sumNums += nums[i];
  }
  console.log(sumNums);
};
// мы можем передавать в функцию просто числа, и оператор rest упакует их в массив
sum(2, 5);
sum(1, 4, 7, 3);

// так же мы можем передавать в функцию массив с помощью оператора spread, который сначала распакует массив в виде чисел, передаст их в функцию, потом оператор rest запакает их обратно в массив, это делается для того, чтобы одной записью можно было передавать в функцию как сисла так и массивы
const numbers = [3, 44, 2];
sum(...numbers); // с помощью оператора spread распаковываем массив и передаем в функцию в качестве аргументов

japaneseRestaurant.orderRamen('Colored Noodle', 'Meat', 'Chiken', 'Onion');
japaneseRestaurant.orderRamen('Ordinary Noodle');
