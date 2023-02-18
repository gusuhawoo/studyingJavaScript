// Spread Operator
// func(...iterable)
// [...iterable]
// { ...obj }
// EcmaScript 2018
function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
// console.log(add(nums[0], nums[1], nums[2])); // 6
console.log(add(...nums)); // 6

// Rest parameters
function sum(first, second, ...nums) {
  console.log(nums); // [ 0, 1, 2, 4 ]
}
sum(1, 2, 0, 1, 2, 4);

// Array Concat
const fruits1 = ['🍏', '🥝'];
const fruits2 = ['🍓', '🍌'];
let arr = fruits1.concat(fruits2);
console.log(arr); // [ '🍏', '🥝', '🍓', '🍌' ]
arr = [...fruits1, '🍉', ...fruits2];
console.log(arr); // [ '🍏', '🥝', '🍉', '🍓', '🍌' ]

// Object
// const suha = { name: 'suha', age: 30 };
// const updated = {
//   ...suha,
//   job: 'frontend engineer',
// };
// console.log(updated); // { name: 'suha', age: 30, job: 'frontend engineer' }

const suha = { name: 'suha', age: 30, home: { address: 'home' } };
const updated = {
  ...suha,
  job: 'frontend engineer',
};
console.log(suha); // { name: 'suha', age: 30, home: { address: 'home' } }
console.log(updated);
/*
{
  name: 'suha',
  age: 30,
  home: { address: 'home' },
  job: 'frontend engineer'
}
*/
