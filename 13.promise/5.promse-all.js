function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}
// Bring bananas and apples together.
getBanana()
  .then((banana) =>
    getApple() //
      .then((apple) => [banana, apple])
  )
  .then(console.log); // [ '🍌', '🍎' ] ← 4s

// Promise.all : Execute in parallel.
// Bring bananas and apples together.
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log('all', fruits)); // all [ '🍌', '🍎' ] ← 3s

/*
all [ '🍌', '🍎' ]
[ '🍌', '🍎' ]
*/

// Promise.race : Outputs only the fastest performed results.
// Bring bananas and apples together.
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log('race', fruit)); // race 🍌 ← 1s
/*
race 🍌
all [ '🍌', '🍎' ]
[ '🍌', '🍎' ]
*/

// Promise.all([getBanana(), getApple(), getOrange()]) //
//   .then((fruits) => console.log('all-error', fruits))
//   .catch(console.log());

Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all-error', fruits))
  .catch(console.log());
/*
all-error [
  { status: 'fulfilled', value: '🍌' },
  { status: 'fulfilled', value: '🍎' },
  {
    status: 'rejected',
    reason: Error: no orange
        at getOrange (/Users/suhakim/studyingJavaScript/13.promise/5.promse-all.js:18:25)
        at Object.<anonymous> (/Users/suhakim/studyingJavaScript/13.promise/5.promse-all.js:52:46)
        at Module._compile (node:internal/modules/cjs/loader:1103:14)
        at Object.Module._extensions..js (node:internal/modules/cjs/loader:1157:10)
        at Module.load (node:internal/modules/cjs/loader:981:32)
        at Function.Module._load (node:internal/modules/cjs/loader:822:12)
        at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
        at node:internal/main/run_main_module:17:47
  }
]
*/
