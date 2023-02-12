// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('eat!');
//   }
//   sleep() {
//     console.log('zZ..');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('eat!');
//   }
//   sleep() {
//     console.log('zZ..');
//   }
//   play() {
//     console.log('play!');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('eat!');
  }
  sleep() {
    console.log('zZ..');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('yellow');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color);
    this.ownerName = ownerName;
  }
  play() {
    console.log('play!');
  }
  sleep() {
    super.sleep();
    console.log('sleep~');
  }
}
const dog = new Dog('black', 'suha');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
