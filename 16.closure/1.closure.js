// Closures : A closure is the combination of a function bundled together(enclosed)
// together(enclosed) with references to its surrounding state(the lexical environment).
// in other words, a closure gives you access to an outer function's scope from an inner function.

const text = 'hello';
function func() {
  console.log(text); // hello
}
func();

// function outer() {
//   const x = 0;
//   function inner() {
//     console.log(`inside inner: ${x}`);
//   }
//   inner();
// }
// outer();

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  return inner;
}
const func1 = outer();
func1();
