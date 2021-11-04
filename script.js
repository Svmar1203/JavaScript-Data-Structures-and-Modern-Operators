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

const staff = ['Waiter', 'Chef', 'Waiter', 'Chef', 'Manager', 'Waiter'];
const stafNew = new Set(staff);
console.log(stafNew);
const stafSecond = [...new Set(staff)];
console.log(stafSecond);
console.log(new Set('svetlanasvetasv').size);

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
console.log(rest);

//set method return updated array
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
console.log(rest);

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(false));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));
rest.delete(2);
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));
console.log(rest);
console.log(rest.size);
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
//rest.clear();
//console.log(rest);
