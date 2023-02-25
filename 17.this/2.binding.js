// this binding
// 'this' is determined dynamically by the 'caller'.

function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`cat's name: ${this.name}`);
  };
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`dog's name: ${this.name}`);
  };
}

const cat = new Cat('tata');
const dog = new Dog('Gordon');
cat.printName(); // cat's name: tata
dog.printName(); // dog's name: Gordon

dog.printName = cat.printName;
dog.printName(); // cat's name: Gordon
cat.printName(); // cat's name: tata

function printOnMonitor(printName) {
  console.log('start callback!');
  // dog.printName() or cat.printName(), printName()
  printName(); // cat's name: undefined
}
printOnMonitor(cat.printName);
