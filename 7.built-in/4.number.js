const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1); // number
console.log(typeof num2); // object

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.NaN); // NaN
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.POSITIVE_INFINITY); // Infinity

if (num1 === Number.NAN) {
}
if (Number.isNaN(num1)) {
}

// Exponential notation
const num3 = 102;
console.log(num3.toExponential()); // 1.02e+2

// Round and convert to a string
const num4 = 1234.12;
console.log(num4.toFixed()); // 1234

console.log(num4.toString()); // 1234.12 number → string
console.log(num4.toLocaleString('ar-EG')); // ١٬٢٣٤٫١٢

//Rounded to be valid up to the desired digit
console.log(num4.toPrecision(5)); // 1234.12 → 1234.1
console.log(num4.toPrecision(2)); // Exponential notation 1234.12 → 1.2e+3

console.log(Number.EPSILON); // The smallest number that can be represented between 0 and 1 2.220446049250313e-16
if (Number.EPSILON > 0 || Number.EPSILON < 1) {
  console.log(Number.EPSILON); // 2.220446049250313e-16
}

const num = 0.1 + 0.2 - 0.2;
console.log(num); // 0.10000000000000003

function isEqual(original, expected) {
  return original === expected;
  // return original - expected < Number.EPSILON;
  // return Math.abs(original - expected) < Number.EPSILON;
}
console.log(isEqual(1, 1)); // true
console.log(isEqual(0.1, 0.1)); // true
console.log(isEqual(num, 0.1)); // false 0.1 + 0.2 - 0.2 !== 0.1
