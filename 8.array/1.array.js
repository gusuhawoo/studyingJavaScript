// Array
let array = new Array(2);
console.log(array); // [ <2 empty items> ]

array = new Array(1, 2, 3);
console.log(array); // [ 1, 2, 3 ]

array = Array.of(1, 2);
console.log(array); // [ 1, 2 ]

const anotherArray = [1, 2, 3, 4];
console.log(anotherArray); // [ 1, 2, 3, 4 ]

array = Array.from(anotherArray);
console.log(array); // [ 1, 2, 3, 4 ]

array = Array.from('text');
console.log(array); // [ 't', 'e', 'x', 't' ]

// Typed Collections
array = Array.from(
  {
    0: 'hel',
    1: 'low',
    length: 2,
  } // ← object
);
console.log(array); // [ 'hel', 'low' ]
