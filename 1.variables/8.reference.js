// The primitive data type is copied and passed.
let a = 1;
let b = a; //1
b = 2;
console.log(a); //1
console.log(b); //2

// The object type is transmitted by copying a reference value (memory address, reference).
let apple = {
  // 0x1234
  name: 'apple',
};
let orange = apple; // 0x1234
orange.name = 'orange';
console.log(apple); //{ name: 'orange'}
console.log(orange); //{ name: 'orange'}
