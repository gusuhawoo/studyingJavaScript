// Unary Operators
// +
// -
// !
let a = 5;
a = -a;
console.log(a); // -1 * 5 = -5
console.log(-a); // -1 * -5 = 5

a = -a;
console.log(a); // 5
a = +a;
console.log(a); // 5
a = -a; // -5
a = +a; // +(-5)
console.log(a); // -5

let boolean = true;
console.log(boolean); // true
console.log(!boolean); // false
console.log(!!boolean); // true

console.clear();
console.log(+false); // 0
console.log(+null); // 0
console.log(+''); // 0
console.log(+true); // 1
console.log(+'text'); // NaN
console.log(+undefined); // NaN
