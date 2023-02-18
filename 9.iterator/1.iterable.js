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
