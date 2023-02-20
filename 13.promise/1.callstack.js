// Call Stack
// Javascript Runtime Environment :
// JavaScript Engine(Memory Heap → Call Stack(Single context stack =>　Single Thread))

// function a() {
//   return 1;
// }

// function b() {
//   return a() + 1; // return a = 1, b = 1 + 1
// }

// function c() {
//   return b() + 1; // return b = 2 (a = 1, b = a + 1), c = 2 + 1
// }

// const result = c();
// console.log(result); // 3 (a = 1, b = 2(a + 1), c = 3(b(a + 1) + 1))
// /*
// a = 1
// b = 2(a + 1)
// c = 3(b(a + 1) + 1)
// */

function a() {
  for (let i = 0; i < 1000000000; i++);
  return 1;
}

function b() {
  return a() + 1; // return a = 1, b = 1 + 1
}

function c() {
  return b() + 1; // return b = 2 (a = 1, b = a + 1), c = 2 + 1
}

console.log('start!');
const result = c();
console.log(result); // 3 (a = 1, b = 2(a + 1), c = 3(b(a + 1) + 1))
/*
a = 1
b = 2(a + 1)
c = 3(b(a + 1) + 1)
*/
