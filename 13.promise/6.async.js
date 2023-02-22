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
