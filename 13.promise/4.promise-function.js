// function fetchEgg(chicken) {
//   return Promise.resolve(`${chicken} => ðĨ`);
// }

// function fryEgg(egg) {
//   return Promise.resolve(`${egg} => ðģ`);
// }

// function getChicken() {
//   return Promise.resolve(`ðŠī => ð`);
// }

// // fetchEgg('ð') //
// //   .then((egg) => console.log(egg));

// 1.
// getChicken()
//   .then((chicken) => {
//     return fetchEgg(chicken);
//   })
//   .then((egg) => fryEgg(egg))
//   .then((friedEgg) => console.log(friedEgg)); // ðŠī => ð => ðĨ => ðģ

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
//     return 'ð'; // ð => ðĨ => ðģ
//   }) //
// .then((chicken) => {
//   return fetchEgg(chicken);
// })
// â
// .then((chicken) => fetchEgg(chicken))
// .then((egg) => fryEgg(egg))
// .then((friedEgg) => console.log(friedEgg));
// â
getChicken()
  .catch(() => 'ð')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log); // ð => ðĨ => ðģ
