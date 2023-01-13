/*
  do not return it explicitly, 
  undefined items are automatically returned. 
*/
function add(a, b) {
  // return a + b;
  return undefined;
}
const result = add(1, 2);
console.log(result);

function print(text) {
  console.log(text);
}
print('text');

function print(num) {
  if (num < 0) {
    return; // return === return undefined
    // If a function does not meet certain conditions,
    // it exits the function quickly.
  }
  console.log(num);
}
