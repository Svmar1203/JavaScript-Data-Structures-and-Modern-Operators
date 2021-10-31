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
}
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
let [main, secondary] = restaurant.categories;
console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);

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


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
}
