// Asynchronous processing
// Web APIs :
// DOM API
// setTimeout
// setInterval
// fetch
// event listener

// function execute() {
//   console.log('1');
// }
// execute(); // 1

function execute() {
  console.log('1');
  setTimeout(() => {
    console.log('2');
  }, 3000); // 3s late
  console.log('3');
}
execute();
/*
1
3
2
*/

// Callback function is called after a set number of seconds.
// Displays an error if seconds are less than 0.
function runInDelay(callback, seconds) {
  if (!callback) {
    throw new Error('You must pass a callback function.');
  }
  if (!seconds || seconds < 0) {
    throw new Error('seconds must be greater than 0.');
  }
  setTimeout(callback, seconds * 1000);
}

// runInDelay(() => {
//   console.log('Timer Completed');
// }, 2);

// runInDelay(() => {
//   console.log('Timer Completed'); // Error
// }, -1);

try {
  runInDelay(() => {
    console.log('Timer Completed');
  }, -2);
} catch (error) {}
