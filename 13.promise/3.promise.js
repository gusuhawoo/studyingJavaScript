// Promise

// function runInDelay(callback, seconds) {
//   if (!callback) {
//     throw new Error('You must pass a callback function.');
//   }
//   if (!seconds || seconds < 0) {
//     throw new Error('seconds must be greater than 0.');
//   }
//   setTimeout(callback, seconds * 1000);
// }
// try {
//   runInDelay(() => {
//     console.log('Timer Completed');
//   }, -2);
// } catch (error) {}

function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds must be greater than 0.'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}
// function runInDelay(seconds) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, seconds * 1000);
//   });
// }

runInDelay(2)
  // .then(Perform the required actions.)
  // .catch(Processed an error.)
  // .finally(Finally done.)
  .then(() => console.log('Timer Completed'))
  .catch(console.error)
  .finally(() => console.log('Done!'));

// try {
//   runInDelay();
// } catch (error) {}
