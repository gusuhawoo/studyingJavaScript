// Iteration Protocol
// for...of spread
// Array String Map Set

// const array = [1, 2, 3];
// for (const item of array) {
//   console.log(item);
// }
// /* [array] → for of
// 1
// 2
// 3
// */

/*
const obj = { 0: 1, 1: 2 };
for (const item of obj) {
  console.log(item);
}

TypeError: obj is not iterable
*/

const obj = { 0: 1, 1: 2 };
for (const item in obj) {
  console.log(item);
}
/* key print in obj
0
1
*/

// [Symbol.iterator](): Iterator;
// for..of, spread

// const array = [1, 2, 3];
// for (const item of array.values()) {
//   console.log(item);
// }
// /* [array] → for of
// 1
// 2
// 3
// */

const array = [1, 2, 3];
for (const item of array.entries()) {
  console.log(item);
}
/* [array] → for of 
[ 0, 1 ]
[ 1, 2 ]
[ 2, 3 ]
*/

// const iterator = array.values();
// for (const item of iterator) {
//   console.log(item);
// }
// /*
// 1
// 2
// 3
// */

// const iterator = array.values();
// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next().value); // 2
// console.log(iterator.next().value); // 3
// console.log(iterator.next().value); // undefined
// console.log(iterator.next().done); // true

const iterator = array.values();
while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}
/*
1
2
3
*/
