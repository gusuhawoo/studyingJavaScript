// Loop Statement
// for(Declaration of Variables; conditional expression; increasing&decreasing) {}
// 1. Declaration of Variables
// 2. {} if the value of the conditional expression is true Perform code block
// 3. Perform the increment/decrease expression
// 4. Repeat 2 and 3 until the conditional expression is false.

for (let i = 0; 1 < 5; i++) {
  console.log(i);
}

for (let i = 0; 1 < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

// Infinity Loop
for (;;) {
  console.log('🤦🏻‍♀️');
}

console.clear();

// Repeated statement control: continue;, break;
// break
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    console.log('"i" finally reached ten.');
    break;
  }
  console.log(i);
}

// continue
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    continue;
    console.log('"i" finally reached ten.');
    break;
  }
  console.log(i);
}
