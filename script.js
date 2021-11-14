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

const fligtData = [583, 'Georg Cooper'];
book.apply(swiss, fligtData);
console.log(swiss);

book.call(swiss, ...fligtData);

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookSw = book.bind(swiss);
bookSw(78, 'Michael Doorter');
bookLH(45, 'Enn Youyu');
bookEW(23, 'Anna Fotrew');

const bookEW23 = book.bind(eurowings, 23);
const bookLH458 = book.bind(lufthansa, 458);
const bookSw788 = book.bind(swiss, 788);
bookSw788('Mille Neonn');
bookLH458('Jana Yamee');
bookEW23('Ste Fgtree');

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(`Summa is ${addTax(0.1, 200)}`);
const addVAT = addTax.bind(null, 0.23);
//addVAT = value => value + value * 0.23;
console.log(addVAT(250));

const tax1 = function (rate1) {
  return function (value1) {
    const summ = value1 + value1 * rate1;
    console.log(summ);
  };
};

/*
const sum12 = tax1(250);
sum12(0.1);
sum12(0.23);
*/

////////////----solution from Jonas----//////////////////
const sum12 = tax1(0.2);
sum12(300);

const addTaxRate = function (rate3) {
  return function (value3) {
    return value3 + value3 * rate3;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(200));
