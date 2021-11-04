'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const orderSet = new Set(['Pizza', 'Pasta', 'Risotto', 'Pizza', 'Pasta']);
console.log(orderSet);
console.log(orderSet.size); //number of diferent names
console.log(orderSet.has('Pizza')); // has or not, true or false
console.log(orderSet.has('Chocolate'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
//orderSet.delete('Risotto');
//console.log(orderSet);
//orderSet.clear();
//console.log(orderSet);

//console.log(new Set('Svetlana'));

for (const order of orderSet) console.log(order);
