// Math
// static properties, method
console.log(Math.E); // Euler's constant 2.718281828459045
console.log(Math.PI); // pi, the ratio of the circumference of a circle to its diameter 3.141592653589793

// static method
// Absolute value
console.log(Math.abs(-10)); // 10
// Round decimal
console.log(Math.ceil(1.4)); // 2
// Lowering the decimal point
console.log(Math.floor(1.4)); // 1
// Rounding off
console.log(Math.round(1.4)); // 1
console.log(Math.round(1.6)); // 2
// Returns integers only
console.log(Math.trunc(1.345)); // 1
// MAX & MIN Number
console.log(Math.max(1, 3, 5, 7, 9)); // 9
console.log(Math.min(1, 3, 5, 7, 9)); // 1
// involution
console.log(3 ** 2); // 9
console.log(Math.pow(3, 2)); // 9
// square root
console.log(Math.sqrt(9)); // 3
// Random number(0~1)
console.log(Math.random()); // 0 < random number && random number > 1
// Random number(Including decimal points 1~10)
console.log(Math.random() * 10 + 1); // 1 < random number && random number > 10
// Random number(1~10)
console.log(Math.floor(Math.random() * 10 + 1)); // 1 < random number && random number > 10
