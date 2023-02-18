// Logical Operator
// && and
// || or
// short-circuit evaluation
const obj1 = { name: '🐶' };
const obj2 = { name: '🐱', owner: 'suha' };

if (obj1 && obj2) {
  console.log('every true!'); // every true!
}
if (obj1 || obj2) {
  console.log('every true!'); // every true!
}

let result = obj1 && obj2; // result　← obj1 && obj2
console.log(result); // { name: '🐱', owner: 'suha' }

result = obj1 || obj2;
console.log(result); // { name: '🐶' }
