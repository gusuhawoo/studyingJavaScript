// manifesto : function name() {}
// expression : const name = function() {}

let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

// Arrow function : const name = () => {}
add = (a, b) => a + b;

console.log(add(1, 2));

// Constructor function : const object = new Function();

// IIFE (Immedicately-Invoked Function Expressions)
// function run() {
//   console.log('🍎');
// }
(function run() {
  console.log('🍎');
})();
