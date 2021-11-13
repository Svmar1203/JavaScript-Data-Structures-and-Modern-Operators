'use strict';

const bookings = [];

const createBooking = function (flightNum, numPassenger = 1, price = 199) {
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

createBooking('LH123');
createBooking('LH123', 123, 800);
