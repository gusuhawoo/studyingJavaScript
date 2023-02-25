// const dog1 = { name: 'momo', emoji: '🐕' };
// const dog2 = { name: 'coco', emoji: '🐩' };

function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  // *Instance-Level Functions
  // this.printName = () => {
  //   console.log(`${this.name} ${this.emoji}`);
  // };
}
// *Prototype-Level Functions
Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
  // Dog { name: 'momo', emoji: '🐕' } Dog { name: 'coco', emoji: '🐩' }
};
const dog1 = new Dog('momo', '🐕');
const dog2 = new Dog('coco', '🐩');
console.log(dog1, dog2);
dog1.printName(); // momo 🐕
dog2.printName(); // coco 🐩
/*
Dog { name: 'momo', emoji: '🐕', printName: [Function (anonymous)] } 
Dog { name: 'coco', emoji: '🐩', printName: [Function (anonymous)] }
*/

// *Overriding
dog1.printName = function () {
  console.log('hello');
};
dog1.printName(); // hello

// *Static level
Dog.hello = () => {
  console.log('hello!'); // hello!
};
Dog.hello();
Dog.MAX_AGE = 20;
