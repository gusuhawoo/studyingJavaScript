// Object literal { key : value}
// new Object()
// Object.create();
// key - string, number, string, symbol
// value - primitive, object (function)
let apple = {
  name: 'apple',
  'hello-bye': '👋',
  0: 1,
  ['hello-bye1']: '👋',
};

// to access data and properties
console.log(apple.name); // dot notation
console.log(apple['hello-bye1']); // bracket notation

// Add Properties
apple.emoji = '🐶';
console.log(apple.emoji);
console.log(apple['emoji']);

//Delete Properties
delete apple.emoji;
console.log(apple);
