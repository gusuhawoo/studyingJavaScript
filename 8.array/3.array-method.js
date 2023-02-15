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

//make a new array
let newArr = fruits.slice(0, 2);
console.log(newArr); // new array [ '🍎', '🍍' ]
console.log(fruits); // [ '🍎', '🍍', '🫐', '🍉' ]
newArr = fruits.slice();
console.log(newArr); // [ '🍎', '🍍', '🫐', '🍉' ]
newArr = fruits.slice(-1);
console.log(newArr); // [ '🍍', '🫐', '🍉' ]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1); // [ 1, 2, 3 ]
console.log(arr2); // [ 4, 5, 6 ]
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]

const arr4 = arr3.reverse();
console.log(arr4); // [ 6, 5, 4, 3, 2, 1 ]

let arr = [
  [1, 2, 3],
  [4, [5, 6]],
];
console.log(arr); // [ [ 1, 2, 3 ], [ 4, [ 5, 6 ] ] ]
console.log(arr.flat()); // [ 1, 2, 3, 4, [ 5, 6 ] ]
console.log(arr.flat(2)); // [ 1, 2, 3, 4, 5, 6 ]

arr = arr.flat(2);
arr.fill(0);
console.log(arr); // [ 0, 0, 0, 0, 0, 0 ]

arr.fill('s', 1, 3);
console.log(arr); // [ 0, 's', 's', 0, 0, 0 ]

arr.fill('a', 1);
console.log(arr); // [ 0, 'a', 'a', 'a', 'a', 'a' ]

// array -> string
let text = arr.join();
console.log(text); // 0,a,a,a,a,a
text = arr.join(' | ');
console.log(text); // 0 | a | a | a | a | a
