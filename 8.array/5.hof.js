// Higher-order function
const fruits = ['🍎', '🍌', '🍉', '🍓', '🍑'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
/*
🍎
🍌
🍉
🍓
🍑
*/

fruits.forEach(function (value, index, array) {
  console.log('--------------------------------');
  console.log(value);
  console.log(index);
  console.log(array);
});
/*
0
[ '🍎', '🍌', '🍉', '🍓', '🍑' ]
--------------------------------
🍌
1
[ '🍎', '🍌', '🍉', '🍓', '🍑' ]
--------------------------------
🍉
2
[ '🍎', '🍌', '🍉', '🍓', '🍑' ]
--------------------------------
🍓
3
[ '🍎', '🍌', '🍉', '🍓', '🍑' ]
--------------------------------
🍑
4
[ '🍎', '🍌', '🍉', '🍓', '🍑' ]
*/

fruits.forEach(function (value) {
  console.log(value);
});
/*
🍎
🍌
🍉
🍓
🍑
*/

fruits.forEach((value) => console.log(value));
/*
fruits.forEach(function (value) {
  console.log(value);
});

===
fruits.forEach((value) => console.log(value));

🍎
🍌
🍉
🍓
🍑
*/

// Find Item(callback function)
const item1 = { name: '🥛', price: 2 };
const item2 = { name: '🍪', price: 3 };
const item3 = { name: '🍙', price: 1 };
const products = [item1, item2, item3, item2];
let result = products.find((value) => {
  return value.name === '🍪';
});
console.log(result); // { name: '🍪', price: 3 }

// findIndex
result = products.findIndex((value) => value.name === '🍪');
console.log(result); // 1

// some
result = products.some((item) => item.name === '🍪');
console.log(result); // true

// every
result = products.every((item) => item.name === '🍪');
console.log(result); // false

// filter(new array)
// const products = [item1, item2, item3, item2];
result = products.filter((item) => item.name === '🍪');
console.log(result); // [ { name: '🍪', price: 3 }, { name: '🍪', price: 3 } ]

// Map(make a new array)
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result); // [ 2, 4, 6, 8, 10 ]
result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result); // [ 1, 4, 3, 8, 5 ]

// Flatmap(make a new array)
result = nums.map((item) => [1, 2]);
console.log(result); // [ [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ] ]

result = nums.flatMap((item) => [1, 2]);
console.log(result);
/*
[
  1, 2, 1, 2, 1,
  2, 1, 2, 1, 2
]
*/

result = ['dream', 'coding'].map((text) => text.split(''));
console.log(result); // [ [ 'd', 'r', 'e', 'a', 'm' ], [ 'c', 'o', 'd', 'i', 'n', 'g' ] ]

result = ['dream', 'coding'].flatMap((text) => text.split(''));
console.log(result);
/*
[
  'd', 'r', 'e', 'a',
  'm', 'c', 'o', 'd',
  'i', 'n', 'g'
]
*/

//sort
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts); // [ 'abc', 'hi'

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers); // [ 0, 1, 10, 2, 4, 5 ]
numbers.sort((a, b) => a - b);
console.log(numbers); // [ 0, 1, 2, 4, 5, 10 ]

// reduce
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0);
console.log(result); // 15
