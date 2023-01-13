function add(a, b) {
  console.log('function');
  return a + b;
}
const result = add(1, 2);
console.log(result); // 3

// ---------------------------------------

function fullName(firstName, lastName) {
  return `${lastName} ${firstName}`;
}

let lastName = 'kim';
let firstName = 'suha';
console.log(fullName(lastName, firstName));
console.log(fullName(firstName, lastName));
