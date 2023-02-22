// JSON: JavaScript Object Notation
// Text format in object form for HTTP communication
// between server and client (browser, mobile).
// stringify(object): JSON
// parse(JSON): object
const suha = {
  name: 'suha',
  age: 30,
  eat: () => {
    console.log('eat');
  },
};

// const json = JSON.stringify(suha);
// console.log(suha); // { name: 'suha', age: 30, eat: [Function: eat] }
// console.log(json); // {"name":"suha","age":30}

// Serializing: Object → String
const json = JSON.stringify(suha);
console.log(suha); // { name: 'suha', age: 30, eat: [Function: eat] }
console.log(json); // {"name":"suha","age":30}
// Deserializing: String Data → JavaScript Object
const obj = JSON.parse(json);
console.log(obj); // { name: 'suha', age: 30 }
