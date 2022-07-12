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
//     ...obj,
//   };
//   callback(product);
// }
// function logProduct(product) {
//   console.log(product);
// }
// function logTotalPrice({ price, count }) {
//   console.log("sum", price * count);
// }
// const p = {
//   name: "iPhone",
//   price: 1000,
//   count: 10,
// };
// createProduct(p, logProduct);
// createProduct(p, logProduct);

// function each(arr, callback) {
//   const newArray = []

//   for (let i = 0; i < arr.length; i += i) {
//     const callbackResult = callback(arr[i], i, arr)
//     newArray.push(callbackResult)
//   }

//   return newArray
// }

// function getName(user) {
//   return user.name
// }

// function getNameAndAge(user) {
//   return `${user.name} is ${user.age} old`
// }

// each(users, getNameAndAge);

// const TRANSACTION_LIMIT = 1000;

// const accaunt = {
//   username: "jacob",
//   balance: 400,

// deposit(amount) {
//   this.balance+=amount
// },

// withdraw(amount){
//   this.balance-=amount
// }

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`index ${index}, znachenie ${number}`);
// };

// // const logMessage = (number, index) => {
// //   console.log(`Индекс ${index}, значение ${number}`);
// // };

// numbers.forEach(logMessage);

// task 5

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],

//   order(pizzaName, onSuccess, onError) {
//     for (const pizza of this.pizzas)
//       if (pizza === pizzaName) {
//         console.log(onSuccess);
//         return onSuccess(pizzaName);
//       }
//     onError(pizzaName);
//     console.log(onError);
//   },
// };
// // Change code above this line
// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }
// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// task 6
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach(function i(number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   // Change code above this line
//   return filteredNumbers;
// }
