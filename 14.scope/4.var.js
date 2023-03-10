// var

// 1
// Declarations and assignments are possible without keywords that declare variables.
something = 'ð©';
console.log(something);

// 2
// Redundant declarations are possible.
var poo = 'ð©';
var poo = 'ð©';
console.log(poo);

let num = 0;
// let num = 1; // SyntaxError: Identifier 'num' has already been declared

// 3
// Block level scopeâ
var apple = 'apple';
{
  var apple = 'ð';
  {
    var apple = 'ð';
  }
}
console.log(apple); // ð

// function level scopeâ­ï¸
function example() {
  var dog = 'ð¶';
}
// console.log(dog); // ReferenceError: dog is not defined
