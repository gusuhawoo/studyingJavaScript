// var

// 1
// Declarations and assignments are possible without keywords that declare variables.
something = '💩';
console.log(something);

// 2
// Redundant declarations are possible.
var poo = '💩';
var poo = '💩';
console.log(poo);

let num = 0;
// let num = 1; // SyntaxError: Identifier 'num' has already been declared

// 3
// Block level scope❌
var apple = 'apple';
{
  var apple = '🍎';
  {
    var apple = '🍏';
  }
}
console.log(apple); // 🍏

// function level scope⭕️
function example() {
  var dog = '🐶';
}
// console.log(dog); // ReferenceError: dog is not defined
