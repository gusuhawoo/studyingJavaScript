// function fetchEgg(chicken) {
//   return Promise.resolve(`${chicken} => 🥚`);
// }

// function fryEgg(egg) {
//   return Promise.resolve(`${egg} => 🍳`);
// }

// function getChicken() {
//   return Promise.resolve(`🪴 => 🐓`);
// }

// // fetchEgg('🐔') //
// //   .then((egg) => console.log(egg));

// 1.
// getChicken()
//   .then((chicken) => {
//     return fetchEgg(chicken);
//   })
//   .then((egg) => fryEgg(egg))
//   .then((friedEgg) => console.log(friedEgg)); // 🪴 => 🐓 => 🥚 => 🍳

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

// 2.
// getChicken()
//   .then((chicken) => {
//     return fetchEgg(chicken);
//   })
//   .then((egg) => fryEgg(egg))
//   .then((friedEgg) => console.log(friedEgg))
//   .catch((error) => console.log(error.name)); // Error

// 3.
// getChicken()
//   .catch((error) => {
//     console.log(error.name); // Error
//     return '🐔'; // 🐔 => 🥚 => 🍳
//   }) //
// .then((chicken) => {
//   return fetchEgg(chicken);
// })
// →
// .then((chicken) => fetchEgg(chicken))
// .then((egg) => fryEgg(egg))
// .then((friedEgg) => console.log(friedEgg));
// →
getChicken()
  .catch(() => '🐔')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log); // 🐔 => 🥚 => 🍳
