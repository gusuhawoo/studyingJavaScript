// strict mode
'use strict';

// var x = 1;
// delete x; // SyntaxError: Delete of an unqualified identifier in strict mode.

// ----------------------------------------------------------------------

function add(x) {
  var a = 2;
  b = a + x;
}
// add(1); // ReferenceError: b is not defined

// ----------------------------------------------------------------------

const array = [1, 2, 3];
// for (const num of array) {
for (num of array) {
  console.log(num); // ReferenceError: num is not defined
}
