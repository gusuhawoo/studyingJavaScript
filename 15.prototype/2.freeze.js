// Object.freeze Add❌, delete❌, create❌, Property Override❌
const suha = { name: 'suha' };
const dog = { name: 'Watson', emoji: '🐶', owner: suha };
Object.freeze(dog);
dog.name = 'Gordon';
console.log(dog); // { name: 'Watson', emoji: '🐶', owner: { name: 'suha' } }
dog.age = 4;
console.log(dog); // { name: 'Watson', emoji: '🐶', owner: { name: 'suha' } }
delete dog.name;
console.log(dog); // { name: 'Watson', emoji: '🐶', owner: { name: 'suha' } }
suha.name = 'kim suha';
console.log(dog); // { name: 'Watson', emoji: '🐶', owner: { name: 'kim suha' } }

// Object.seal create⭕️, Add❌, delete❌, Property Override❌
// const cat = {};
// Object.assign(cat, dog); // property copy
const cat = { ...dog };
console.log(cat); // { name: 'Watson', emoji: '🐶', owner: { name: 'kim suha' } }
Object.seal(cat);
console.log(cat); //  { name: 'Watson', emoji: '🐶', owner: { name: 'kim suha' } }
cat.name = 'meow';
console.log(cat); // { name: 'meow', emoji: '🐶', owner: { name: 'kim suha' } }
delete cat.emoji;
console.log(cat); // { name: 'meow', emoji: '🐶', owner: { name: 'kim suha' } }

console.log(Object.isFrozen(dog)); // true
console.log(Object.isSealed(cat)); // true

// Object.preventExtensions Add❌,
const tiger = { name: 'tiger' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger)); // false
tiger.name = 'Simba';
console.log(tiger); // { name: 'Simba' }
delete tiger.name;
console.log(tiger); // {}
tiger.age = 1;
console.log(tiger); // {}
