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

// Set

const orders = new Set([
  'Sushi',
  'Ramen',
  'Sushi',
  'Tempura',
  'Ramen',
  'Sushi',
]);
// Во множестве Set элементы не могут повторяться. Так же множество - это неупорядоченная последовательность, элементы в множестве не имеют индексов

console.log(orders); // Вернет множество из 3 элементов {'Sushi', 'Ramen', 'Tempura'}

console.log(new Set('Hello!')); // Вернет {'H', 'e', 'l', 'o', '!'}
console.log(new Set(''));
console.log(orders.size); // .size - размер множества, вернет 3
console.log(orders.has('Sushi')); // метод множества .has() проверяет наличие элемента в множестве, возвращает true\false
console.log(orders.has('Pizza'));

orders.add('Edamame'); // Добавляет элемент в множество
orders.add('Edamame');
orders.delete('Tempura'); // Удаляет элемент из множества
// orders.clear(); // очищает множиство, удаляет все элементы
console.log(orders);

for (const order of orders) {
  console.log(order);
}

// Remove duplicates (удаление дублирующих значений)
const mealIngridients = [
  'Rice',
  'Pepper',
  'Garlic',
  'Pepper',
  'Garlic',
  'Meat',
  'Meat',
  'Garlic',
];
console.log(new Set(mealIngridients).size); // чтобы узнать колличество уникальных значений

console.log(new Set('Kozlov Aleksei').size); // узнать колличество уникальныз букв

const mealIngridientsSet = new Set(mealIngridients);
console.log(mealIngridientsSet); // получаем множиство {'Rice', 'Pepper', 'Garlic', 'Meat'}
const mealIngridientsUnique = [...mealIngridientsSet];
console.log(mealIngridientsUnique); // получаем массив ['Rice', 'Pepper', 'Garlic', 'Meat']
