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
// callback hell + .then
// function fetchFruits() {
//   return getBanana() //
//     .then((banana) =>
//       getApple() //
//         .then((apple) => [banana, apple])
//     );
// }
// fetchFruits() //
//   .then((fruits) => console.log(fruits)); // [ '🍌', '🍎' ]

// async & await
async function fetchFruits() {
  const banana = await getBanana();
  const apple = await getApple();
  return [banana, apple];
}
fetchFruits() //
  .then((fruits) => console.log(fruits)); // [ '🍌', '🍎' ]

// ----------------------------------------------------------------------

function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error("You can't bring chicken."));
  // return Promise.resolve(`🪴 => 🐓`);
}

// function makeFriedEgg() {
//   return getChicken()
//     .catch(() => '🐔')
//     .then(fetchEgg)
//     .then(fryEgg)
//     .then(console.log); // 🐔 => 🥚 => 🍳
// }

// makeFriedEgg().then(console.log); // undefined

// function makeFriedEgg() {
//   return getChicken()
//     .catch(() => '🐔')
//     .then(fetchEgg)
//     .then(fryEgg)
//     .then((result) => {
//       console.log(result);
//       return result;
//     }); // 🐔 => 🥚 => 🍳
// }

// makeFriedEgg().then(console.log); // 🐔 => 🥚 => 🍳

// promise
// function makeFriedEgg() {
//   return getChicken()
//     .catch(() => '🐔')
//     .then(fetchEgg)
//     .then(fryEgg);
// }

// makeFriedEgg().then(console.log); // 🐔 => 🥚 => 🍳

// async
async function makeFriedEgg() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch {
    chicken = '🐔';
  }
  const egg = await fetchEgg(chicken);
  return fryEgg(egg);
}

makeFriedEgg().then(console.log); // 🐔 => 🥚 => 🍳
