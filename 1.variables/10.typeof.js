// typeof: checked the data type.
// Convert a value to a type string.
// The assigned value determines the type.
let variable;
console.log(typeof variable); //undefined

variable = '';
console.log(typeof variable); //string

variable = 123;
console.log(typeof variable); //number

variable = Symbol();
console.log(typeof variable); //symbol
