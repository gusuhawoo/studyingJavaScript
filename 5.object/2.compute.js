const obj = {
  name: 'suha',
  age: 30,
};

// At the time of coding
obj.name;
obj.age;

// Use when you want to access properties dynamically
function getValue(obj, key) {
  return obj[key];
}
console.log(obj, 'name');

function addKey(obj, key, value) {
  obj[key] = value;
}
addKey(obj, 'job', 'enginner');
console.log(obj);

function deleteKey(obj, key) {
  obj[key] = value;
}
