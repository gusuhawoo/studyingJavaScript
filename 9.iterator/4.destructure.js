// Desturcturing Assignment
// make easy to group data
const fruits = ['🍏', '🥝', '🍓', '🍌'];
const [first, second, ...others] = fruits;
console.log(fruits[0]); // 🍏
console.log(first); // 🍏
console.log(second); // 🥝
console.log(others); // [ '🍓', '🍌' ]

const point = [1, 2];
const [x, y, z = 0] = point;
console.log(x); // 1
console.log(y); // 2
console.log(z); // 0

function createEmoji() {
  return ['apple', '🍎'];
}
// const array = createEmoji();
// console.log(array); // [ 'apple', '🍎' ]
const [title, emoji] = createEmoji();
console.log(title); // apple
console.log(emoji); // 🍎

// const suha = { name: 'suha', age: 30, job: 'frontend engineer' };
// function display(person) {
//   console.log('name', person.name); // name suha
//   console.log('age', person.age); // age 30
//   console.log('job', person.job); // job frontend engineer
// }
// display(suha);

const suha = { name: 'suha', age: 30, job: 'frontend engineer' };
function display({ name, age, job }) {
  console.log('name', name); // name suha
  console.log('age', age); // age 30
  console.log('job', job); // job frontend engineer
}
display(suha);

const { name, age, job: occupation, pet = 'cat' } = suha;
console.log(name); // suha
console.log(age); // 30
console.log(occupation); // frontend engineer
console.log(pet); // cat
