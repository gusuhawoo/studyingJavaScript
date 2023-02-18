const map = new Map([
  ['key1', '🍎'],
  ['key2', '🍌'],
]);
console.log(map); // Map(2) { 'key1' => '🍎', 'key2' => '🍌' }

// size check
console.log(map.size); // 2

// true, false check
console.log(map.has('key1')); // true
console.log(map.has('key6')); //false

// round
map.forEach((value, key) => console.log(key, value));
/*
key1 🍎
key2 🍌
*/
console.log(map.keys()); // [Map Iterator] { 'key1', 'key2' }
console.log(map.values()); // [Map Iterator] { '🍎', '🍌' }
console.log(map.entries()); // [Map Entries] { [ 'key1', '🍎' ], [ 'key2', '🍌' ] }

// find
console.log(map.get('key1')); // 🍎
console.log(map.get('key2')); // 🍌
console.log(map.get('key4')); // undefined

// add
map.set('key3', '🥝');
console.log(map); // Map(3) { 'key1' => '🍎', 'key2' => '🍌', 'key3' => '🥝' }

// delete
map.delete('key3');
console.log(map); // Map(2) { 'key1' => '🍎', 'key2' => '🍌' }

// delete all
map.clear();
console.log(map); // Map(0) {}

// map !== object
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: 'good' };

const obj = {
  [key]: milk,
};
console.log(obj); // { '[object Object]': { name: 'milk', price: 10, description: 'good' } }

const map2 = new Map([[key, milk]]);
console.log(map2);
/*
Map(1) {
  { name: 'milk', price: 10 } => { name: 'milk', price: 10, description: 'good' }
}
*/
console.log(obj[key]); // { name: 'milk', price: 10, description: 'good' }
console.log(map2[key]); // undefined
console.log(map2.get(key)); // { name: 'milk', price: 10, description: 'good' }
