// function loop() {
//   const array = [];
//   for (let i = 0; i < 5; i++) {
//     array.push(function () {
//       console.log(i);
//     });
//   }
//   return array;
// }

// const array = loop();
// array.forEach((func) => func());
// /*
// 0
// 1
// 2
// 3
// 4
// */

function loop() {
  const array = [];
  for (var i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

const array = loop();
array.forEach((func) => func());
/*
5
5
5
5
5
 */
