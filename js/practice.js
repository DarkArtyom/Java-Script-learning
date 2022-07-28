"use strict";
// operator if and else

// let cost;
// const subscribtion = "premium";

// if (subscribtion === "free") {
//   cost = 0;
// } else if (subscribtion === "vip") {
//   cost = 100;
// } else if (subscribtion === "premium") {
//   cost = 1000;
// } else {
//   console.log("Invalid subscription type");
// }

// console.log(cost);

// // ternal operator

// const balance = 1000;
// const message = balance <= 0 ? "positive" : "negative";
// console.log(message);

// const age = 18;
// const info = age <= 19 ? "welcome to pornhub" : "have to grow";
// console.log(info);

// let price;
// const game = "cs";

// // switch instruction

// switch (game) {
//   case "dota":
//     price = 100;
//     break;

//   case "cs":
//     price = 1800;
//     break;

//   default:
//     console.log("invalid have no money");
// }

// // loop with while----

// console.log(price);

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// / Домашка: "Delivery"
// Ви пропонуєте користувачу список доступних ресторанів для замовлення їжі.
// Користувач обирає конкретний ресторан і отримує список доступних пунктів в меню для замовлення із вказанням їх вартості.
// Користувач обирає своє замовлення, після чого має отримати його підтвердження та основну інформацію: "що замовив, вартість та час доставки".

// const restaurants = [
//   {
//     order: [],
//     brand: "KFC",
//     menu: {
//       chicken: 50,
//       burger: 50,
//     },
//     deliveryTime: 60,
//   },
//   {
//     order: [],
//     brand: "mcDonalds",
//     menu: {
//       cola: 25,
//       burger: 30,
//     },
//     deliveryTime: 30,
//   },
//   {
//     order: [],
//     brand: "Burger King",
//     menu: {
//       burgerXXL: 170,
//       burger: 70,
//     },
//     deliveryTime: 20,
//   },
// ];

// console.log(restaurants);

// const restorantsObjects = restaurants.map((restaurant) => restaurant.brand);
// console.log(restorantsObjects);

// const torpedaDelivery = {
//   getDelivery(delivery, food) {
//     alert(
//       `You choose ${food}, your price is ${delivery.menu[food]} dollars and your delivery time is ${delivery.deliveryTime} minut`
//     );
//   },
//   chooseDishes(choosen) {
//     const cafe = restaurants.find((restaurant) => restaurant.brand === choosen);
//     const menu = Object.keys(cafe.menu);
//     const chooseMenu = prompt(`choose your menu ${menu}`);

//     if (chooseMenu && menu.includes(chooseMenu)) {
//       this.getDelivery(cafe, chooseMenu);
//     } else {
//       this.chooseDishes(choosen);
//     }
//   },
//   chooseRestaurant() {
//     const restaurantBrands = restaurants.map((restaurant) => restaurant.brand);
//     const chooseRest = prompt(
//       `Choose your destiny or restaurants ${restaurantBrands}`
//     );

//     if (chooseRest && restaurantBrands.includes(chooseRest)) {
//       this.chooseDishes(chooseRest);
//     } else {
//       this.chooseRestaurant();
//     }
//   },
// };

// torpedaDelivery.chooseRestaurant();

// Створи функції, які:
// - знайдуть обєкт по найкращим score.
// - виведуть масив всіх score.
// - виведуть суму всіх score.

// const users = [
//   { name: "Victor", score: 20 },
//   { name: "Mario", score: 10 },
//   { name: "Tatiana", score: 30 },
// ];

// const sortNames = (users) =>
//   [...users].sort((previousName, nextName) =>
//     previousName.name.localeCompare(nextName.name)
//   );
// console.log(sortNames(users));

// const highestScore = (users) => [...users].sort((a, b) => b.score - a.score);
// const allScores = (users) => users.map((user) => user.score);
// const totalSum = (users) => users.reduce((acc, user) => acc + user.score, 0);
// console.log(totalSum(users));

// console.log(allScores(users));
// console.log(highestScore(users));

// foo1(); // { name: "Tatiana", score: 30 }
// foo2(); // [20, 10, 30]
// foo3(); // 60

// Напишите две функции:
// - letMeSeeYourName(callback) - спрашивает имя пользователя через prompt и вызывает callback функцию
// - greet(name) - коллбек, принимающий имя и логирующий в консоль строку "Привет <name>"
// Реализуй проверку, что prompt не пустой

// const greet = (name) => console.log(`Hello ${name}`);

// const letMeSeeYourName = (callback) => {
//   const userName = prompt(`enter your name`);
//   userName !== "" ? callback(userName) : letMeSeeYourName(callback);
// };

// letMeSeeYourName(greet); // Привет <name>
// const Arr = ["hello", "world", "this", "is", "great"];
// //   => 'hello world this is great'
// const smash = (words) => words.join(" ").trim();
// console.log(smash(Arr));

// ------------------------ CLASSES

// class Blogger {
//     constructor(settings) {
//         this.email = settings.email
//         this.age = settings.age
//         this.numbersOfPosts = settings.numbersOfPosts
//         this.topics =settings.topic
//     }
//     getInfo() {
//     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`
// }
//     updatePostCount(num) {
//     this.numberOfPosts = num
// }
// }
// const mango = new Blogger({
//     email: "mango@mail.com",
//     age: 24,
//     numberOfPosts: 20,
//     topics: ['tech', 'cooking'],
// });
// console.log(mango);
// console.log(mango.getInfo());

// const numbers = 348597;

// function dijitalize(n) {
//   const str = n.toString();
//   const arr = [];
//   const reverse = str.split("").reverse();
//   // return arr.push(reverse);
//   console.log(reverse);

//   //   const arr = str(n);
//   //   console.log(arr);

//   //   const newReverse = arr.reverse(arr);

//   //   console.log(newReverse);
// }

// function dijitalize(number) {
//   const str = number.toString();
//   const arr = str.split("");
//   const rev = [...arr].reverse();
//   const newArr = [];
//   for (let i = 0; i < rev.length; i++) {
//     return newArr.push(Number(rev[i]));
//   }
//   console.log(newArr);
// }

// dijitalize(348597);

// 348597 => [7,9,5,8,4,3]
// 0 => [0]

//  --------------------example 1

// Напиши класс Blogger для создания обьекта блоггера со следующим свойствами:

// email - почта, строка
// age - возраст, число
// numberOfPosts - кол-во постов, число
// topics - массив тем на которых специализируется блоггер
// Класс ожидает один параметр - объект настроек с одноимёнными свойствами.

// class Blogger {
//   constructor({ email, age, numberOfPosts = 0, topics = [] }) {
//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//   }

//   updatePostCount(number) {
//     this.numberOfPosts = number;
//   }
// }

// const mango = new Blogger({
//   email: "mango@mail.com",
//   age: 24,
//   numberOfPosts: 20,
//   topics: ["tech", "cooking"],
// });
// // Добавь метод getInfo(), который, возвращает строку: User ${почта} is ${возраст} years old and has ${кол-во постов} posts.

// // Добавь метод updatePostCount(value), который в параметре value принимает количество постов которые нужно добавить пользователю.

// console.log(mango);
// console.log(mango.getInfo());
// mango.updatePostCount(10);
// console.log(mango.getInfo());
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new User({
//   name: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

// var summation = function (num) {
//   let sum = 0;
//   for (let i = 0; i <= num; i += 1) {
//     sum += i;
//   }
//   return sum;
// };

// console.log(summation(8));
