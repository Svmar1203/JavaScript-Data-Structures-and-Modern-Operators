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
  console.log(`transformd by: ${fn.name}`);
};

transformer('JavaScript is the best', upper);
