'use strict';
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassenger = 5,
  price = 199 * numPassenger
) {
  // ES5 numPassenger = numPassenger || 1;
  //ES5 price = price || 199;

  const booking = {
    flightNum,
    numPassenger,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123', 2);
createBooking('LH123');
*/

/*
const flight = 'L124';
const passenger = {
  name: 'Johnas Coort',
  passport: 234567890,
};

const checkInn = function (flightNum, passenger) {
  flightNum = 'LH123';
  passenger.name = 'Mr' + passenger.name;

  if (passenger.passport === 234567890) {
    alert('Check Inn');
  } else {
    alert('Wrong Passport');
  }
};

checkInn(flight, passenger);
console.log(flight);
console.log(passenger);


const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(passenger);
checkInn(flight, passenger);
*/
/*
const oneWord = function (str) {
  return str.replace(/ /g, ' ');
};

const upper = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

const transformer = function (str, fn) {
  console.log(`original string: ${str}`);
  console.log(`transformed string: ${fn(str)}`);
  console.log(`transformed by: ${fn.name}`);
};

transformer('JavaScript is the best', upper);
*/

const oneTwo = function (str) {
  const too = str.replace(/ /g, '').toLowerCase();
  console.log(too);
};

const firstToUpper = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

const transform = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transform('JavaScript is the best!', firstToUpper);

transform('JavaScript is the best!', oneTwo);

const high5 = function () {
  console.log('🤑❤️😍😘');
};

document.body.addEventListener('click', high5);

['Adam', 'Jonas', 'Sveta'].forEach(high5);

document.querySelector('button').addEventListener('click', function () {
  console.log('😘Are you buy plane??');
});

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetreHey = greet('HEy!');
greetreHey('Jonas');
greetreHey('Steven');
greet('Hello')('Sveta!');

const bey = greeting => name => console.log(`${greeting} ${name}`);

bey('Hi')('Jonas');

const lufthansa = {
  airLine: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airLine} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}, name` });
  },
};

lufthansa.book(345, 'Jonas Inner');
lufthansa.book(678, 'Michael Gordon');
console.log(lufthansa);

const eurowings = {
  airLine: 'Eurowings',
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 42, 'Svetlana Coorrt');
console.log(lufthansa);

const swiss = {
  airLine: 'Swiss Air Lines',
  name: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 54, 'Yana Booju');
