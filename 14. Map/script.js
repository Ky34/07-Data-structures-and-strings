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

// Map

const restaurant = new Map(); // создание новой структуры  map()
restaurant.set('name', 'Bench'); // с помощью метода .set() добавляется через запятую новое ключ и значение в структуру map()
restaurant.set(1, 'London,');
restaurant.set(2, 'Paris, France');
console.log(restaurant.set(3, 'Kiev, Ukrain')); // метод .set() так же возвращает всю структуру map() с установленным новым значением

// в отличие от объекта, ключи и значения в map() могут быть любыми типами данных. Можно добавлять элементы в одну строку друг за другом
restaurant
  .set('categories', ['Japanese', 'Sushi', 'Vegetarian', 'Organic'])
  .set('open', 10)
  .set('close', 23)
  .set(true, 'Bench is open :)')
  .set(false, 'Bench is closed :(');

console.log(restaurant.get('name')); // чтобы получить значение используется метод .get() в скобках указываем ключ
console.log(restaurant.get(true)); // ключ нужно указывать такого же типа, как при установке
console.log(restaurant.get(2));

const currentTime = 22;

// Получаем значения времени по ключам open/close сравниваем с текущим временем, получаем true/false и выводим сообщение открыт ресторан или нет
console.log(
  // получаем 'Bench is open :)'
  restaurant.get(
    currentTime > restaurant.get('open') && // true
      currentTime < restaurant.get('close') // true
  )
);

console.log(restaurant.has('categories')); // метод .has() проверяет по названию наличие ключа в структуре map() возвращает true/false
console.log(restaurant.delete(1)); // метод delete() удаляет элемент по ключу, возвращает true если элемент был удален и false если такой элемент не был найден
const arr = [1, 2, 3]; // чтобы сделать массив ключем в строуктуре map() его нужно поместить в переменную
restaurant.set(arr, 'hello!');
restaurant.set(document.querySelector('h2'), 'Heading'); // можно получить элемент на странице

console.log(restaurant);
console.log(restaurant.size); // размер структуры map()
// restaurant.clear(); // удаляет все элементы из map()
console.log(restaurant.get(arr));
