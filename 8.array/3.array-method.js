// array-method
const fruits = ['🍎', '🍌', '🍉'];

console.log(Array.isArray(fruits)); // true
console.log(Array.isArray({})); // false

console.log(fruits.indexOf('🍎')); // 0

console.log(fruits.includes('🍎')); // true

// add
fruits.push('🍑');
console.log(fruits); // ['🍎', '🍌', '🍉', '🍑']; // Appends new elements to the end of an array

length = fruits.unshift('🥥');
console.log(fruits); // [ '🥥', '🍎', '🍌', '🍉', '🍑' ]

// delete
let lastItem = fruits.pop();
console.log(fruits); // .pop [ '🥥', '🍎', '🍌', '🍉', '🍑' ] → [ '🥥', '🍎', '🍌', '🍉' ]
console.log(lastItem); // 🍑

lastItem = fruits.shift();
console.log(fruits); // .shift [ '🥥', '🍎', '🍌', '🍉' ] → [ '🍎', '🍌', '🍉' ]
console.log(lastItem); // 🍑

// add, delete
const deleted = fruits.splice(1, 1);
console.log(fruits); // [ '🍎', '🍌', '🍉' ] → [ '🍎', '🍉' ]
console.log(deleted); // [ '🍌' ]

fruits.splice(1, 0, '🍍', '🫐');
console.log(fruits); // [ '🍎', '🍉' ] → [ '🍎', '🍍', '🫐', '🍉' ]
