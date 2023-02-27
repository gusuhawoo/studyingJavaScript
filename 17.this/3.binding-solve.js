function Cat(name) {
  this.name = name;
  // 2. arrow function
  this.printName = () => {
    console.log(`cat's name: ${this.name}`);
  };
  // 1. bind function
  // this.printName = this.printName.bind(this);
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
dog.printName(); // cat's name: Gordon → cat's name: tata
cat.printName(); // cat's name: tata

function printOnMonitor(printName) {
  console.log('start callback!');
  // dog.printName() or cat.printName(), printName()
  printName(); // cat's name: undefined → cat's name: tata
}
printOnMonitor(cat.printName);
