'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
/*
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

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again'],
]);

console.log(question);
console.log(Object.entries(restaurant.openingHours));
const restMap = new Map(Object.entries(restaurant.openingHours));
console.log(restMap);

//Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

//const answer = Number(prompt('Your answer: '));
//console.log(answer);

//console.log(question.get(question.get('correct') === answer));

/////--Convert map to array--//////////
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log(question.values());

const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'Substitution'],
  [47, 'GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow card'],
  [69, 'Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow card'],
]);
console.log(gameEvents.size);

console.log(Object.entries(...gameEvents));

console.log(gameEvents.values());
const events = gameEvents.values();
console.log(events);

const eventsNew = new Set(events);
console.log(eventsNew);
const eventsArr = [...eventsNew];
console.log(eventsArr);
gameEvents.delete(64);
console.log(gameEvents);
console.log(gameEvents.size);
const average = 90 / gameEvents.size;
console.log(average);
console.log(`An event happened, on average, every ${average} minutes`);
const timee = [...gameEvents.keys()];
console.log(timee);
console.log(timee.length);
console.log(timee.pop());
*/

/*
for (const [keyy, valuee] of gameEvents) {
  if (
    keyy <= 45
      ? console.log(`[FIRST HALF] ${keyy}: ${valuee}`)
      : console.log(`[second half] ${keyy}: ${valuee}`)
  );
}
*/

/*
for (const [min, eventss] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF]: ${min}: ${eventss}`);
}
*/
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length);
console.log('B737'.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal')); // -1, because portugal with lower case not exist, Portugal!
console.log(airline.indexOf('Portugal'));
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(1, -1));
console.log(plane.slice(-1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky!!');
};

checkMiddleSeat('11B');
checkMiddleSeat('23E');
checkMiddleSeat('23C');
console.log(new String('jonas'));
const jonas = new String('jonas');
console.log(jonas);
console.log(jonas[0]);
console.log(jonas[2]);
console.log(typeof jonas);

//Fix capitalization in name
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
const passenger = 'JoNAs';
const passengerLower = passenger.toLowerCase();
console.log(passengerLower);
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const checkNmae = function (name) {
  const nameLower = name.toLowerCase();
  console.log(nameLower);
  const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
  console.log(nameCorrect);
};

checkNmae('SVEtlaNa');

//Comparing emails
const email = 'hello@jonas.io';
const loginEmail = ' HeLLo@JoNas.IO \n';
const lowerEmail = loginEmail.toLowerCase();
console.log(lowerEmail);
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
const normalizedEmail = lowerEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);
if (email === normalizedEmail) {
  console.log('ok');
} else {
  console.log('Not ok');
}

//replacing
const priceGB = '288,25&';
const priceUS = priceGB.replace('&', '$').replace(',', '.');
console.log(priceUS);
*/

/*
const announcment =
  'All passengers come to boarding door 23. Boarding door 23!';
//const announcmentCorrect = announcment.replace('door', 'gate');
//console.log(announcmentCorrect);
const announ = announcment.replace(/door/g, 'gate');
console.log(announ);
const planes = 'Airbus320neo';
console.log(planes.includes('A320'));
console.log(planes.includes('Boeing'));
console.log(planes.startsWith('A3')); // starts with some first letters

if (planes.startsWith('Airbus') && planes.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
} else {
  console.log('This is not NEW part of Airbus family');
}

const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome on board!');
  }
};

checkBaggage('I have laptop, some Food and a pocket Knife');
checkBaggage('Socks and kamera');
checkBaggage('Got some snacks and a gun for protection');

console.log('a+very+nice+string'.split('+'));
console.log('Svetlana Ivanova'.split(' '));
const [firstName, lastName] = 'Jonas Smitdt'.split(' ');
console.log(firstName, lastName);
const mrr = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(mrr);
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas smidtd');
*/

/*
console.log('a+very+nice+string'.split('+'));
console.log('Johnas Michaell'.split(' '));
const [firstName, lastName] = 'Johnas Smidtd'.split(' ');
console.log([firstName, lastName]);
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const nameArr = [];

  for (const n of names) {
    //nameArr.push(n[0].toUpperCase() + n.slice(1));
    nameArr.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameArr.join(' '));
};

capitalizeName('jessica ann smith');
capitalizeName('jonass smortr');

const message = 'Go to gate 23!';
console.log(message.padStart(25, '-'));
console.log('Jonas'.padStart(25, '*'));
console.log('Jonas'.padEnd(25, '*'));
console.log('Jonas'.padStart(15, '*').padEnd(25, '*'));
*/

/*
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice('-4');
  const correct = last.padStart(str.length, '*');
  return correct;
};

console.log(maskCreditCard('121212123456789'));

const messages = 'Bad weather...All Departures Delayed...   ';
console.log(messages.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'*'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);

('Some_Variable');

const one = function (namee) {
  const oneWord = namee.split(' ');
  console.log(oneWord);
  00;
};
*/
/*
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd([20])}${'🎅'.repeat(i + 1)}`);
  }
});
