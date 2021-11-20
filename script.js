'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
*/

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];
/////// SLICE //// Slice method not mutate original arr
console.log(arr.slice(2));
console.log(arr.slice(1, 4));
console.log(arr.slice(-2)); // 2 last elements from end
console.log(arr.slice(-1)); // last element
console.log(arr.slice(1, -2)); // elment 2 from end not included
console.log(arr.slice()); // just shallow copy of existing array
console.log([...arr]);

//////// SPLICE  //Mutate the original array

//console.log(arr.splice(2)); //from 2 element data from original arr is deleted
//console.log(arr); //original arr is mutated
arr.splice(-1); // delete last element
console.log(arr);
arr.splice(1, 2); // second parameter (2), is count of deleted elements
console.log(arr);

//////// REVERSE  //Mutate the original array
arr = ['a', 'b', 'c', 'd', 'e'];

const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

///////// CONCAT  //do is not mutate the original array
const letter = arr.concat(arr2);
console.log(letter);
console.log([...arr, ...arr2]); // the same result as concat method
console.log(...arr, ...arr2);

///////// JOIN
console.log(letter.join('-'));

//////////
*/
/*
const arr = [23, 33, 44];
console.log(arr[0]);
console.log(arr.at(0)); //the same result
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1)); // get the last element of arr
console.log('jonas'.at(0));
console.log('jonas'.at(-1));
*/
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movElem of movements) {
  if (movElem > 0) {
    console.log(`You deposited ${movElem}`);
  } else {
    console.log(`You withdrew ${Math.abs(movElem)}`); // Math.abs number without minus
  }
}

console.log('------------FOREACH---------------');
movements.forEach(function (mov, i, arr) {
  // first element is always movement, second elem is index, third is array
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposit ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrow ${mov}`);
  }
});

console.log(`---------ENTERIES------------`);
for (const [i, elem] of movements.entries()) {
  if (elem > 0) {
    console.log(`Element ${i + 1}: You deposited ${Math.abs(elem)}`);
  } else {
    console.log(`Element ${i + 1}: you withdrow ${Math.abs(elem)}`);
  }
}
*/
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value} `);
});

const currentUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currentUnique);

currentUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

////////////----MY Solution----///////////////
/*
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];
const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

function checkDogs(arr1, arr2) {
  const newJulia = arr1.slice(1, -2);
  console.log(newJulia);
  const bothArr = newJulia.concat(arr2);
  console.log(bothArr);
  bothArr.forEach(function (value, key, map) {
    if (value >= 3) {
      console.log(
        //Dog number 1 is an adult, and is 5 years old
        `Dog number ${key + 1} is an adult, and is ${value} years old`
      );
    } else {
      //Dog number 2 is still a puppy 🐶
      console.log(
        `Dog number ${key + 1} is still a puppy, and is ${value} years old`
      );
    }
  });
}

checkDogs(dogsJulia2, dogsKate2);
*/ /////////////////-----END------/////////////

/////////////--SOLUTION FROM JONAS--///////////

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function (arr1, arr2) {
  const dogsJuliaCorrected = arr1.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-1);
  console.log(dogsJuliaCorrected);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);
  dogs.forEach(function (value, index) {
    if (value >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult, and is ${value} years old`
      );
    } else {
      console.log(
        `Dog number ${index + 1} is still puppy and is ${value} years old`
      );
    }
  });
};

checkDogs(dogsJulia, dogsKate);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
//MAP methods return value from each itteration of origin array
//MAP method NOT mutate origin array
const movementsUSD = movements.map(function (value) {
  return value * eurToUsd;
});

console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

///////////--Arrow function, MY solution--///////////
const movUSD = value => console.log(movements.map(value * eurToUsd));

//////////////---Solution for Jonas---//////////
const movmUSD = movements.map(value => value * eurToUsd);
console.log(movmUSD);
/////////////--First variant---///////////
/*
const movementsDescription = movements.map((val, index, arr) => {
  if (val > 0) {
    return `Movements ${index + 1}: You deposited ${val} `;
  } else {
    return `Movements ${index}: You withdrew ${Math.abs(val)}`;
  }
});
console.log(movementsDescription);
console.log(...movementsDescription);
*/
////////////---second variant arrow function---/////////////

const movementsDescription = movements.map(
  (val, index) =>
    `Movements ${index + 1}: You ${
      val > 0 ? 'deposited' : 'withdrew'
    } ${Math.abs(val)}`
);

console.log(movementsDescription);
