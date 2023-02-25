// Mixin
const play = {
  play: function () {
    console.log(`${this.name} is play!`);
  },
};

const sleep = {
  sleep: function () {
    console.log(`${this.name} is sleep...`);
  },
};

function Dog(name) {
  this.name = name;
}

Object.assign(Dog.prototype, play, sleep);
const dog = new Dog('dogy');
console.log(dog); // Dog { name: 'dogy' }
dog.play(); // dogy is play!
dog.sleep(); // dogy is sleep...

class Animal {}
class Tiger extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}

Object.assign(Tiger.prototype, play, sleep);
const tiger = new Tiger('Tata');
tiger.play();
tiger.sleep();
