function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('ð');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('ð');
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
//   .then((fruits) => console.log(fruits)); // [ 'ð', 'ð' ]

// async & await
async function fetchFruits() {
  const banana = await getBanana();
  const apple = await getApple();
  return [banana, apple];
}
fetchFruits() //
  .then((fruits) => console.log(fruits)); // [ 'ð', 'ð' ]

// ----------------------------------------------------------------------

function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => ðĨ`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => ðģ`);
}

function getChicken() {
  return Promise.reject(new Error("You can't bring chicken."));
  // return Promise.resolve(`ðŠī => ð`);
}

// function makeFriedEgg() {
//   return getChicken()
//     .catch(() => 'ð')
//     .then(fetchEgg)
//     .then(fryEgg)
//     .then(console.log); // ð => ðĨ => ðģ
// }

// makeFriedEgg().then(console.log); // undefined

// function makeFriedEgg() {
//   return getChicken()
//     .catch(() => 'ð')
//     .then(fetchEgg)
//     .then(fryEgg)
//     .then((result) => {
//       console.log(result);
//       return result;
//     }); // ð => ðĨ => ðģ
// }

// makeFriedEgg().then(console.log); // ð => ðĨ => ðģ

// promise
// function makeFriedEgg() {
//   return getChicken()
//     .catch(() => 'ð')
//     .then(fetchEgg)
//     .then(fryEgg);
// }

// makeFriedEgg().then(console.log); // ð => ðĨ => ðģ

// async
async function makeFriedEgg() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch {
    chicken = 'ð';
  }
  const egg = await fetchEgg(chicken);
  return fryEgg(egg);
}

makeFriedEgg().then(console.log); // ð => ðĨ => ðģ
