const textObj = new String('Hello World');
const text = 'Hello World';
console.log(textObj); // [String: 'Hello World']
console.log(text); // Hello World
console.log(text.length); // 11

console.log(text[0]); // Array > index H
console.log(text[1]); // e
console.log(text[2]); // l
console.log(text.charAt(0)); // function H
console.log(text.charAt(1)); // e
console.log(text.charAt(2)); // l

console.log(text.indexOf('l')); // 2
console.log(text.lastIndexOf('l')); // 9

console.log(text.includes('tx')); // false
console.log(text.includes('h')); // false
console.log(text.includes('H')); // true

console.log(text.startsWith('He')); // true
console.log(text.endsWith('d')); // true

console.log(text.toUpperCase()); // HELLO WORLD
console.log(text.toLowerCase()); // hello world

console.log(text.substring(0, 4)); // Hell
console.log(text.slice(2)); // llo World
console.log(text.slice(-2)); // ld

const space = '       space      ';
console.log(space.trim()); // space

const longText = 'Get to the, point';
console.log(longText.split(' ')); // [ 'Get', 'to', 'the', 'point' ]
console.log(longText.split(' ', 2)); // [ 'Get', 'to' ]
console.log(longText.split(',', 2)); // [ 'Get to the', ' point' ]
console.log(longText.split(', ', 2)); // [ 'Get to the', ' point' ]
