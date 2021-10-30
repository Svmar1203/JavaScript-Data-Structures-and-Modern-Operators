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
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

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

/////--ARRAY--////////////
const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

////--Default values--/////
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//////--Mutating variables--///////////
let a = 222;
let b = 40;
const obj = { a: 10, b: 15, c: 20 };
({ a, b } = obj); // requared parentheses!!
console.log(a, b);

/*
console.log(restaurant.order(3, 0));
const [starter, main] = restaurant.order(3, 0);
console.log(starter, main);
*/

///////////////////
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
*/
/////////////////////
/*
let [main, secondary] = restaurant.categories;
console.log(main, secondary);
*/
////////////////////////
/*
//Switching variables num.1
const temp = main;
main = secondary;
secondary = temp;
console.log(main, temp);
*/
/////////////////
//Switcing variables num.2
/*
[main, secondary] = [secondary, main];
console.log(main, secondary);
*/
//////////////
/*
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restorauntName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restorauntName, hours, tags);
console.log(restaurant);
*/

/*
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
*/
////////--NESTED DESTRUCTURING--////
//const nested = [2, 4, [7, 8]];
//const [i, , j] = nested;
//const [i, , [b, k]] = nested;
//console.log(i, b, k);

//////////--DEFAULT VALUES--/////
//const [i, p, j = 1] = [8, 9];
//console.log(i, p, j);
//const [h = 1, k = 1, l = 1] = [2, 5];
//console.log(h, k, l);
