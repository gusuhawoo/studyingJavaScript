// Bubbling up, Propagating

// 1.
// function a() {
//   throw new Error('error!');
// }

// function b() {
//   a();
// }

// function c() {
//   b();
// }

// try {
//   c();
// } catch (error) {
//   console.log('Catched!'); // Catched!
// }
// console.log('done!'); // done!

// 2.
// function a() {
//   throw new Error('error!');
// }

// function b() {
//   try {
//     a();
//   } catch (error) {
//     console.log(error);
//   }
// }

// function c() {
//   b();
// }

// try {
//   c();
// } catch (error) {
//   console.log('Catched!');
// }
// console.log('done!'); // done!

// 3.
function a() {
  throw new Error('error!');
}

function b() {
  try {
    a();
  } catch (error) {
    console.log("I don't think I can handle this error."); // I don't think I can handle this error.
    throw error;
  }
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log('Catched!'); // Catched!
}
console.log('done!'); // done!
