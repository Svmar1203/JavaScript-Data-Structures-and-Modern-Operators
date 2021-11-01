'use strict';

// Data needed for a later exercise
/*
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = '22.00',
  }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will by delivered to ${address} at time ${time}`
    );
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

restaurant.orderDelivery({
  time: '22:30',
  address: 'Street via Sole',
  mainIndex: 2,
  starterIndex: 1,
});

restaurant.orderDelivery({
  address: 'Vaiavara',
  starterIndex: 2,
});
*/

//const [one, , , four] = restaurant.categories;
//console.log(`ALLEE!!! ${one}, ${four}`);
///////////////////////

//Variant 1, with temporary variable in middle
/*
let [main, secondary] = restaurant.categories;
console.log(main, secondary);

let temp = main;// temporary variable
main = secondary;
secondary = temp;
console.log(main, secondary);
*/

//Variant 2, lot easier
/*
let [main, secondary] = restaurant.categories;
console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);
*/

/////////--Spread operations--///////////
/*
const arr = [1, 2, 3];
const badArr = [5, 6, arr[0], arr[1], arr[2]];
console.log(badArr);

const goodArr = [8, 9, ...arr];
console.log(goodArr);

const otherArr = [7, 5, ...badArr];
console.log(otherArr);

const newMenu = [...restaurant.mainMenu, 'Fish'];
console.log(newMenu);
*/

//////--Iterables: arrays, strings, maps, sets, NOT OBJECTS!!--//////////////
/*
const str = 'Svetlana';
const letters = [...str, ' ', 'M.'];
console.log(letters); //'S', 'v','e','t','l','a','n','a',' ','M.'
console.log(...letters); //S v e t l a n a  M.
*/

/////--Copy array--////////////
//const mainMenuCopy = [...restaurant.mainMenu];
//console.log(mainMenuCopy);

//////--Join 2 Arrays--////////
/*
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
*/

/////--ARRAY--////////////
/*
const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);*/

////--Default values--/////
/*
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
*/

//////--Mutating variables--///////////
/*
let a = 222;
let b = 40;
const obj = { a: 10, b: 15, c: 20 };
({ a, b } = obj); // requared parentheses!!
console.log(a, b);
*/

///////--Nested objects--//////////
/*
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
*/
/*
const {
  fri: { open: c, close: d },
} = openingHours;
console.log(c, d);
*/

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

///////////////--Array with order function--/////////////////
/*
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starderIndex, mainIndex) {
    return [this.starterMenu[starderIndex], this.mainMenu[mainIndex]];
    //console.log(
    `HEY!!!! ${this.starterMenu[starderIndex]}, HELLO## ${this.mainMenu[mainIndex]}`;
    //);
  },
};
*/

////--Receive(получили) 2 return values from a function--////////////////
/*
console.log(restaurant.order(0, 0));
const [focaccia, pizza] = restaurant.order(0, 0);
console.log(focaccia, pizza);
*/

////////////--Nested array, nested destructuring--///////////////
/*
const nested = [1, 2, [5, 6]];
const [a, , [c, d]] = nested;
console.log(a, c, d);
*/

////////////--Default values--//////////
//const [p, h = 1, k = 1] = [88, 44]; //k = 1, h = 1(default value, if we don't know exactly on/not value);
//console.log(p, h, k);

////////////--Second part with opening hours--Destructuring OBJECTS--//////////////
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starderIndex, mainIndex) {
    return [this.starterMenu[starderIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starderIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starderIndex]} and ${this.mainMenu[mainIndex]} will by delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
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

restaurant.orderDelivery({
  time: '22.30',
  address: 'Via del Sol',
  mainIndex: 1,
  starderIndex: 0,
});

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

/*
//SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[5, 6, 7]];

//REST, because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
*/

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  {
    console.log(sum);
  }
};

add(1, 2, 3);
add(4, 5, 6, 7);
add(55, 66, 77, 88);

const x = [5, 2, 3];
add(...x);

//Real-world example
/*
const ingredients = [
  prompt(`Let's make pasta! Ingredient 1: ?`),
  prompt(`Ingredient 2: ?`),
  prompt(`Ingredient3: ?`),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients); // the same as before!! THIS IS BEST SOLUTION!
*/

//Objects
/*
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Gouseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
console.log(restaurantCopy);
restaurantCopy.name = 'Rome Name';
console.log(restaurantCopy);
restaurantCopy.location = 'Vaivara';
console.log(restaurantCopy);
console.log(restaurant.name);
console.log(restaurantCopy.name);
*/

/////--With objects we need CURLY! braces and we need to specify the NAME!--/////
////////////////////--Default values--////////////////////////////
/*
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {//We want new names of existing properties
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Add new #menu# array
const { menu = [], starterMenu: starters = [] } = restaurant; // menu = []-default value
console.log(menu, starters); //new array MENU
*/

///////--Mutating variables--////////////////////
/*
let a = 999;
let b = 444;

const obj = { a: 10, b: 20, c: 30 };
({ a, b } = obj);
console.log(a, b);

/////////////--Nested objects--obj in obj in obj--//////
const { name, openingHours, categories } = restaurant;
const {
  fri: { open: o, close: c }, //open = o; close = c
} = openingHours; //just so syntaxis
console.log(o, c);
console.log(`Open hour is: ${o}, close hour is: ${c} `);
*/
