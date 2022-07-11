// CALLBACK functions

// const fnA = function (message, callback) {
//   console.log(message);

//   callback(500);
// };

// const fnB = function (number) {
//   console.log(`this is fnB function, number ${number}`);
// };

// fnA("hi, its me", fnB);

// const mathR = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// // const add = function (x, y) {
// //   return x + y;
// // };

// // const add2 = function (x, y) {
// //   return x - y;
// // };

// mathR(2, 33, function (x, y) {
//   return x + y;
// });
// mathR(4, 2, function (x, y) {
//   return x - y;
// });

// function createProduct(obj, callback) {
//   const product = {
//     id: Math.tandom(),
//     ...obj
//   }

//   callback(product)
// }

// function logProduct(product) {
//   console.log(product);
// }

// const p = {
//   name: "iPhone",
//   price: 1000,
//   count: 10
// }

// createProduct(p, logProduct)
