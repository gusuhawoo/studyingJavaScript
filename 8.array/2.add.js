const fruits = ['🍎', '🍌', '🍉', '🍓', '🍑'];

console.log(fruits[0]); // 🍎
console.log(fruits[1]); // 🍌
console.log(fruits[2]); // 🍉
console.log(fruits[3]); // 🍓
console.log(fruits[4]); // 🍑
console.log(fruits.length); // 5

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// const fruits = ['🍎', '🍌', '🍉', '🍓', '🍑'];
// add, delete - bad
fruits[8] = '🥥';
console.log(fruits); // [ '🍎', '🍌', '🍉', '🍓', '🍑', <3 empty items>, '🥥' ]

delete fruits[1];
console.log(fruits); // [ '🍎', <1 empty item>, '🍉', '🍓', '🍑', <3 empty items>, '🥥' ]
