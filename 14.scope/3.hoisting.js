// Function
// The function declaration may also be called before the declaration.
print(); // hoisting

function print() {
  console.log('hello');
}

// ----------------------------------------------------------------------
// Variable
// 1
// console.log(hi); // ReferenceError: Cannot access 'hi' before initialization
let hi = 'hi';

// ----------------------------------------------------------------------

// 2
// const cat = new Cat(); // ReferenceError: Cannot access 'Cat' before initialization
class Cat {}

// ----------------------------------------------------------------------

// 3
// let x = 1; // ReferenceError: Cannot access 'x' before initialization
{
  console.log(x);
  let x = 2;
}
