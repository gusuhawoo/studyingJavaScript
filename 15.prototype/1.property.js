const dog = { name: 'Gordon', emoji: '🐶' };

console.log(Object.keys.dog); // undefined
console.log(Object.values(dog)); // [ 'Gordon', '🐶' ]
console.log(Object.entries(dog)); // [ [ 'name', 'Gordon' ], [ 'emoji', '🐶' ] ]

console.log('name' in dog); // true
console.log(dog.hasOwnProperty('name')); // true

// Each property of an object is stored as an object called the property descriptor.
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);
/*
{
  name: {
    value: 'Gordon',
    writable: true,
    enumerable: true,
    configurable: true
  },
  emoji: { value: '🐶', writable: true, enumerable: true, configurable: true }
}
*/

const desc = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(desc);
/*
{
  value: 'Gordon',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

Object.defineProperty(dog, 'name', {
  value: 'Watson',
  writable: false,
  enumerable: false,
  configurable: false,
});
console.log(dog.name); // Watson
console.log(Object.keys(dog)); // [ 'emoji' ]
delete dog.name;
console.log(dog.name); // Watson

const student = {};
Object.defineProperties(student, {
  firstName: {
    value: 'suha',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: 'kim',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${lastName} ${firstNAme}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split(' ');
    },
    configurable: true,
  },
});
console.log(student); // { firstName: 'suha', lastName: 'kim' }
