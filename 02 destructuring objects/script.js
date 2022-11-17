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
};

japaneseRestaurant.foodDelivery({
  // объект который передается в функцию
  deliveryTime: '12:30',
  address: '18 Markham Woods Rd',
  mainMenuIndex: 1,
  appetizersIndex: 0,
});

japaneseRestaurant.foodDelivery({
  address: '18 Markham Woods Rd',
});

// Destructing objects

const { workingHours: hours, name: restName, categories } = japaneseRestaurant; // названия создаваемых переменных должны быть такие же как названия свойств объекта, порядок не имеет значения. Чтобы изменить названия переменных нужно после свойства объекта поставить : и указать желаемое название
console.log(hours, restName, categories); // из объекта извлекается объект с рабочими часама, название ресторана и массив категорий

// Default values
const { menu = [], appetizers: starterMenu = [] } = japaneseRestaurant; // как и с массивами мы можем установить дефолное значение, в нашем примере пустой массив, если свойства menu нет в объекте, ему присвоится значение пустого массива
console.log(menu, starterMenu); // получаем пустой массив и массив из свойсва appetaizers

// Mutating variables (изменение переменных)
let x = 3;
let y = 5;
const obj = { x: 11, y: 22, z: 33 };

({ x, y } = obj); // чтобы переопределить значения для переменных x и y значениями из объекта obj нужно всё выражение взять в круглые скобки ()
console.log(x, y); //  получим х = 11 и у = 22

// Nested objects (вложенные объекты)
const {
  sun: { open: openHours, close: closeHours }, // деструктуризация вложенного объекта sun в объект hours
} = hours;
console.log(openHours, closeHours);
