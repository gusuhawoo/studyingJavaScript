// default value for the parameter is unconditionally undefined.
// The information in the parameter is stored in an accessible arguments object inside the function.

function add(a, b) {
  console.log(a); // 1
  console.log(b); // 2
  console.log(arguments); // { '0': 1, '1': 2, '2': 3 }
  console.log(arguments[0]); // 1
  console.log(arguments[1]); // 2
  return a + b;
}
add(1, 2, 3);

function add(a, b) {
  console.log(a); //undefined
  console.log(b); //undefined
  console.log(arguments); // {}
  console.log(arguments[0]); // undefined
  console.log(arguments[1]); // undefined
  return a + b;
}
add();

// Default Parameters a = 1, b = 1
function add(a = 1, b = 1) {
  console.log(a); // 2
  console.log(b); // 2
  console.log(arguments); // { '0': 2, '1': 2 }
  console.log(arguments[0]); // 2
  console.log(arguments[1]); // 2
  return a + b;
}
add(2, 2);

//Rest Parameters
function sum(a, b, ...numbers) {
  console.log(a); // 1
  console.log(b); // 2
  console.log(numbers); // 3, 4, 5, 6, 7, 8, 9
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
