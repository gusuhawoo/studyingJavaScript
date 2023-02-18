// Optional Chaining Operator
// ES11 (ECMAScript 2020)
// ?.
// checked null or undefined
let item = { price: 1 };
// const price = item && item.price;
const price = item?.price;
console.log(price); // 1

let obj = {
  name: '🐶',
  owner: { name: 'suha' },
};
// const ownerName = obj && obj.owner && obj.owner.name;
// console.log(price); // 1
function printName(obj) {
  // const ownerName = obj && obj.owner && obj.owner.name;
  const ownerName = obj?.owner?.name;
  console.log(ownerName); // undefined
}
printName(obj);
