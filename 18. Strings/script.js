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

const airline = 'SkyUp Airline';
const airplane = 'Boeing 737';

console.log(airplane[0]);
console.log(airplane[1]);
console.log(airplane[2]);
console.log('SkyUp'[0]);

console.log(airline.length);
console.log('Boeing 737'.length);

console.log(airplane.indexOf(' ')); // пробел находиться на позиции 6 индекса
console.log(airplane.indexOf('7')); // получаем индекс первой цифры 7
console.log(airplane.lastIndexOf('7')); // получаем ингдекс последней цифры 7
console.log(airline.indexOf('Up')); // чувствителен к регистру, если последовательность символов не найдена, возвращает -1

console.log(airplane.slice(7));
console.log(airplane.slice(0, 6));
console.log(airplane);
console.log(airline.slice(0, airline.indexOf(' '))); // извлекаем первое слово в строке
console.log(airplane.slice(airplane.lastIndexOf(' ') + 1)); // извлекаем последнее слово в строке и убираем пробел перед ним

console.log(airline.slice(-2)); // получаем 2 элемента с конца
console.log(airline.slice(2, -2)); // обрезает с 3-го элемента вначале до 2го элемента с конца

const checkMidleSeat = function (seat) {
  // B and E are middle seat
  const seatLetter = seat.slice(-1);
  if (seatLetter === 'B' || seatLetter === 'E') {
    console.log('This is a middle seat.');
  } else {
    console.log('This is not a middle seat.');
  }
};

checkMidleSeat('21A');
checkMidleSeat('7B');
checkMidleSeat('14E');

const x = new String('Hello');
console.log(typeof x);
console.log(typeof x.slice(2));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix the passenger name

const passengerName = 'liNDa'; // Linda
const passengerNameLower = passengerName.toLowerCase();
console.log(passengerNameLower);
const passengerNameFixed =
  passengerNameLower[0].toUpperCase() + passengerNameLower.slice(1);

console.log(passengerNameFixed);

// Email validation

const email = 'someemail@gmail.com';
const loginEmail = '  SomeEmail@Gmail.com \n';

const emailLower = loginEmail.toLowerCase();
const emailTrimmed = emailLower.trim(); // удаляет пробелы и лишние символы в начале и в конце
console.log(emailTrimmed);

const emailNormalized = loginEmail.toLowerCase().trim();
console.log(emailNormalized);

console.log(email === emailNormalized);

// Replacing

const ticketPriceEU = '197,23€';
const ticketPriceUS = ticketPriceEU.replace(',', '.').replace('€', '$'); // метод заменяет , на . и € на $
console.log(ticketPriceUS);

const announcement =
  'All passengers of flight EG234 come to boarding door 18. Boarding door 18!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate')); // заменяет все элементы 'door' на 'gate'

console.log(announcement.replace(/door/g, 'gate')); // заменяет глобально элементы door на gate

// Methods return boolean

console.log(airplane);
console.log(airplane.includes('737')); // получаем true
console.log(airplane.includes('738')); // получаем false
console.log(airplane.startsWith('Bo')); // получаем true (строка начинается с)
console.log(airplane.startsWith('Bt')); // получаем false

console.log(airplane.endsWith(' 737')); // получаем true (строка заканчивается на)
const airplane1 = 'airbus';

if (airplane.startsWith('Boeing')) {
  console.log('You gonna fly on Boeing');
}
if (airplane1.startsWith('Boeing')) {
  console.log('You gonna fly on Boeing');
}
// Example
const checkLugaage = function (luggage) {
  const luggageLower = luggage.toLowerCase(); // для сравнения нужно привести все символы к нижнему регистру
  if (luggageLower.includes('knife') || luggageLower.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome to the board!');
  }
};

checkLugaage('Food, jeans, socks and Swiss Knife');
checkLugaage('Laptop and food');
checkLugaage('Camera, food, Gun for protection');

// Split and join

console.log('My+name+is+Aleksei.'.split('+')); // получаем массив по знаку "+" ['My', 'name', 'is', 'Aleksei.']
console.log('Aleksei Kozlov'.split(' ')); // получаем массив в качестве разделителя " " ['Aleksei', 'Kozlov']

const [firstName, lastName] = 'Aleksei Kozlov'.split(' '); // разделяем по пробелу на массив и определяем в переменные
console.log(firstName, lastName);

console.log(['Mr.', firstName, lastName.toUpperCase()].join(' ')); // соеденяет элементы в строку разделяя пробелом

const capitalizeName = function (name) {
  const names = name.split(' '); // преобразуем в массив имён
  const namesCapitalized = [];
  for (const n of names) {
    // namesCapitalized.push(n[0].toUpperCase() + n.slice(1)); // перебираем все имена в массиве заменяя первую букву на заглавную и добавляем в новый пустой массив
    namesCapitalized.push(n.replace(n[0], n[0].toUpperCase())); // зменяем в каждом слове массива 1 букву на заглавную и добавляем в новый массив
  }
  const capitalizedFullName = namesCapitalized.join(' '); // соеденяем массив в строку с разделителем " "
  return capitalizedFullName;
};

console.log(capitalizeName('aleksei kozlov'));
console.log(capitalizeName('kornei zhitnik loshra jr.'));

// Padding
const message = 'Hi there!!';
console.log(message.padStart(13, '-').padEnd(16, '-')); // .padStart .padEnd - символы в начале и в конце строки, 1 параметр общее колличество символов, 2 ой параметр какой символ использовать(в примере длинна строки 10 символов, добавляем 3 черточки в начале и в конце)

const maskCreditCrd = function (cardNumber) {
  const strCardNumber = cardNumber + ''; // преобразуем число в строку
  const last4 = strCardNumber.slice(-4);
  return last4.padStart(strCardNumber.length, '*');
};

console.log(maskCreditCrd(1597145896323598));
console.log(maskCreditCrd('1546754097654289'));

// repeat()
const greeting = 'Hi!';
console.log(greeting.repeat(50)); // повторить строку 50 раз

const howMuchYouLoveSomebody = function (loveNumber) {
  console.log(`I love you ${'💋 '.repeat(loveNumber)} `);
};
howMuchYouLoveSomebody(50);
