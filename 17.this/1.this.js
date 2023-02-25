/*
This in the global context
Browser: window
node: module
*/
const x = 0;
module.exports.x = x;
console.log(this); // { x: 0 }
console.log(globalThis);
// globalThis.setTimeout()
// setTimeout()

/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 32.220624923706055,
      nodeStart: 1.1889588832855225,
      v8Start: 1.6631247997283936,
      bootstrapComplete: 22.98241686820984,
      environment: 12.24458384513855,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1677303602383.669
  },
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
}
*/

// Inside the function this

// globalThis
function fun() {
  console.log(this);
}
fun();

// Strict Mode
// 'use strict';
// function fun() {
//   console.log(this); // undefined
// }
// fun();

// Constructor function ir class this
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
  };
}

const cat1 = new Cat('Nya-');
const cat2 = new Cat('Meow!');
cat1.printName(); // Nya-
cat2.printName(); // Meow!
