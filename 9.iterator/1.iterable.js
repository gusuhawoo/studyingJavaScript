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

// [Symbol.iterator](): Iterator{ next(): {value. done}};
// make a iterator (0~10 (num++ *2))
// 1.
// const multiple = {
//   [Symbol.iterator]() {
//     const max = 10;
//     let num = 0;
//     return {
//       next() {
//         return { value: num++ * 2, done: num > max };
//       },
//     };
//   },
// };
// for (const num of multiple) {
//   console.log(num);
// }
// /*
// 1
// 2
// 3
// 0
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// */

//2. function
function makeIterable(initialValue, maxValue, callback) {
  return {
    [Symbol.iterator]() {
      let num = initialValue;
      return {
        next() {
          return { value: callback(num++), done: num > maxValue };
        },
      };
    },
  };
}
const multiple = makeIterable(0, 10, (n) => n * 2);
for (const num of multiple) {
  console.log(num);
}
/*
1
2
3
0
2
4
6
8
10
12
14
16
18
*/

const single = makeIterable(0, 10, (n) => n);
for (const num of single) {
  console.log(num);
}
/*
0
1
2
3
4
5
6
7
8
9
*/
