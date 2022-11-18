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

  orderRamen: function (noodle, ...otherIngs) {
    console.log(noodle);
    console.log(otherIngs);
  },
};

// Old method optional chaining (проверяем есть ли свойства в объекте)
if (japaneseRestaurant.workingHours && japaneseRestaurant.workingHours.thu) {
  console.log(japaneseRestaurant.workingHours.thu.open);
}

// Propeties Using optional chaining (проверяем есть ли свойства в объекте с помощью нового синтаксиса "?")
console.log(japaneseRestaurant.workingHours.thu?.open); // optional chaining - знак ? проверяет наличие метода thu в объекте и если оно undefined или null сразу возвращает undefined или null, иначе продолжает дальше по цепочке обращается к свойству open

console.log(japaneseRestaurant.workingHours?.thu?.open); // проверяем сначала workingHours затем thu

const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of daysOfWeek) {
  // console.log(day);
  const open = japaneseRestaurant.workingHours[day]?.open ?? 'never'; // обращаемся к свойствам объекта на каждом шаге передаеться день недели из массива и если он есть в объекте обращаемся к методу open, если нет, используем оператор нулевого слияния ?? присваиваем дефолтное значение например 'never'
  console.log(`On ${day} restaurant open at ${open}`);
}

// Methods Using optional chaining
console.log(japaneseRestaurant.orderFood?.(1, 2) ?? 'Method does not exist');
console.log(japaneseRestaurant.order?.(1, 2) ?? 'Method does not exist');

// Arrays
const posts = [
  {
    name: 'JS is cool!',
    userName: 'Ted',
  },
  {
    name: 'JS is shit!',
    userName: 'Dick',
  },
];
const users = [];

console.log(posts[0]?.name ?? 'This post does not exist');
console.log(posts[2]?.name ?? 'This post does not exist');

// Check if the array is empty
console.log(posts[0]?.name ?? 'The array is empty'); // чтобы проверить пустой ли массив нужно всегда обращатся к 0 элементу
console.log(users[0]?.name ?? 'The array is empty');

// проверка обычным методом
if (users.length > 0) {
  console.log(users[0].name);
} else {
  console.log('The array is empty');
}
