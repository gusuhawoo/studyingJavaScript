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
