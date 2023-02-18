// Generator
// function*

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

// ----------------------------------------------------------

// function* multipleGenerator() {
//   for (let i = 0; i < 10; i++) {
//     console.log(i); // 0
//     yield i ** 2;
//   }
// }
// const multiple = multipleGenerator();
// let next = multiple.next();
// console.log(next.value, next.done); // 0 false

// ----------------------------------------------------------

// function* multipleGenerator() {
//   for (let i = 0; i < 10; i++) {
//     console.log(i); // 0
//     yield i ** 2;
//   }
// }
// const multiple = multipleGenerator();
// let next = multiple.next();
// console.log(next.value, next.done); // 0 false

// next = multiple.next(); // 1

// function* multipleGenerator() {
//   for (let i = 0; i < 10; i++) {
//     console.log(i); // 0
//     yield i ** 2;
//   }
// }
// const multiple = multipleGenerator();
// let next = multiple.next();
// console.log(next.value, next.done); // 0 false

// multiple.return();

// next = multiple.next();

// ----------------------------------------------------------

// function* multipleGenerator() {
//   for (let i = 0; i < 10; i++) {
//     console.log(i); // 0
//     yield i ** 2;
//   }
// }
// const multiple = multipleGenerator();
// let next = multiple.next();
// console.log(next.value, next.done); // 0 false

// multiple.throw('Error!');

// next = multiple.next();
// // Error:  yield i ** 2;
// //         ^

// ----------------------------------------------------------

function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      console.log(i); // 0
      yield i ** 2;
    }
  } catch (error) {
    console.log(error);
  }
}
const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done); // 0 false

multiple.throw('Error!'); // Error!

next = multiple.next();
console.log(next.value, next.done); // undefined true
