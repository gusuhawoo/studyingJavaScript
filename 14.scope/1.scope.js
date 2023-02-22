// Code Block : {}, if() {}, function() {}

// Variables inside a block cannot be referenced outside the block.
{
  const a = 'a';
  console.log('a', a);
}
const b = 'b';

// console.log('code Block a', a); // ReferenceError(app crashed): a is not defined

// ----------------------------------------------------------------------
// Variables inside a function cannot be referenced outside the function.

// local variable
function print() {
  const message = 'Hello World';
  console.log(message);
}
// console.log(message); // ReferenceError(app crashed): message is not defined

// ----------------------------------------------------------------------
// The parameters of a function cannot be referenced outside the function.
function sum(a, b) {
  console.log(a, b);
}
// console.log(a, b); // ReferenceError(app crashed): a is not defined
