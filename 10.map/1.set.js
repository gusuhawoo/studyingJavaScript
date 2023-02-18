// Set
const set = new Set([1, 2, 3]);

console.log(set.size); // 3

console.log(set.has(2)); // true
console.log(set.has(6)); // false

set.forEach((item) => console.log(item));
/*
1
2
3
*/
// round
for (const value of set.values()) {
  console.log(value);
}
/*
1
2
3
*/

// add
set.add(6);
console.log(set); // Set(4) { 1, 2, 3, 6 }
set.add(6);
console.log(set); // Set(4) { 1, 2, 3, 6 } Cannot be duplicated

// delete
set.delete(6);
console.log(set); // Set(3) { 1, 2, 3 }

// Delete all
set.clear();
console.log(set); // Set(0) {}

// Object set
const obj1 = { name: '🥥', price: 8 };
const obj2 = { name: '🍒', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs); // Set(2) { { name: '🥥', price: 8 }, { name: '🍒', price: 5 } }

obj1.price = 10;
objs.add(obj1);
console.log(objs); // Set(2) { { name: '🥥', price: 10 }, { name: '🍒', price: 5 } }

const obj3 = { name: '🍒', price: 5 };
objs.add(obj3);
console.log(objs);
/*
Set(3) {
  { name: '🥥', price: 10 },
  { name: '🍒', price: 5 },
  { name: '🍒', price: 5 }
}
*/
obj3.price = 8;
console.log(objs);
/*
Set(3) {
  { name: '🥥', price: 10 },
  { name: '🍒', price: 5 },
  { name: '🍒', price: 8 }
}
*/
