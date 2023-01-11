// while() {}
// {} until the condition is false Repeat code execution
let num = 5;
while (num > -0) {
  console.log(num);
  num--;
}

let isActive = true;
let i = 0;
while (isActive) {
  console.log('Infinity');
  if (i === 1000) {
    break;
  }
  i++;
}

// do {} while() {}
isActive = false;
do {
  console.log('do {} while() {}');
} while (isActive);
