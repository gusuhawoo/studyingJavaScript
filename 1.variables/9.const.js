// let can be reallocated.
let a = 1;
a = 2;

// const cannot be reallocated.
// 1. constant number
// 2. constant variable or variable
const text = 'hello';
text = hi; // error

// 1. constant number
const MAX_FRUITS = 5;

// 2. constant variable or variable
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
// apple = {}; error
console.log(apple); // {name: 'apple',color: 'red',display: '🍎',}
apple.name = 'orange';
console.log(apple); // {name: 'orange',color: 'red',display: '🍎',}
