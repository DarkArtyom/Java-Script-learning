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

// // task 7
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(function newArr(number) {
//     secondArray.forEach(function arr(number2) {
//       if (number === number2) {
//         commonElements.push(number && number2);
//       }
//     });
//   });
//   return commonElements;
// Change code above this line
// }

//   return commonElements;
//   // Change code above this line
// }
// const arr1 = [1, 2, 3];
// const arr2 = [2, 1, 17, 19];
// getCommonElements(arr1, arr2);

// task 10
// const calculateTotalPrice = orderedItems => {

//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// const planets = ["Земля", "Марс", "Венера", "Юпитер"];

// const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
// console.log(planetsInUpperCase);
// console.log(planetsInUpperCase);

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names); // ['Манго', 'Поли', 'Аякс', 'Киви', 'Хьюстон']

// task 13

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArr = [];
//   const copyNumbers = [...numbers];
//   console.log(copyNumbers);
//   copyNumbers.forEach((number) => {
//     console.log(number);
//     if (number % 2 === 0) {
//       // console.log(number);
//       newArr.push(number + value);
//       // console.log(newArr);
//     } else {
//       newArr.push(number);
//     }

//     return newArr;
//     // newArr.push((number % 2 === 0)+ value);
//   });
//   console.log(newArr);
//   //   return newArr;
//   // Change code above this line
// }

// changeEven([44, 13, 81, 92, 36, 54], 100);

// const changeEvenCopy = changeEven([44, 13, 81, 92, 36, 54], 100);
// Вызов `changeEven([44, 13, 81, 92, 36, 54], 100)` возвращает новый массив `[144, 13, 81, 192, 136, 154]`

// tasks 15
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map((book) => book.title);

// task 18
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];
// const getUserEmails = (users) => {
//   return users.map((user) => user.email);
// };

// task 20
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((book, index, array) => array.indexOf(book) === index);

// Task 23
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

// const getUsersWithAge = (users, minAge, maxAge) => {
//   const userAges = users.filter(
//     (user) => user.age > minAge && user.age < maxAge
//   );
//   return userAges;
// };

// Task 25
// const usersArr = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];
// const getUsersWithFriend = (users) => {
//   console.log(users);
//   const friendsArr = users.flatMap((user) => user.friends);
//   console.log(friendsArr);

//   let filteredFriends = friendsArr.filter(
//     (user, index, array) => array.indexOf(user) === index
//   );
//   console.log(filteredFriends);
// };
// getUsersWithFriend(usersArr);

// task 30 (every)
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 === 1);

// const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 === 1);

// const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 === 1);
