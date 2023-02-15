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
