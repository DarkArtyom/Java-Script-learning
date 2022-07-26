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

letMeSeeYourName(greet); // Привет <name>

const Arr = ["hello", "world", "this", "is", "great"];
//   => 'hello world this is great'
const smash = (words) => words.join(" ").trim();

console.log(smash(Arr));
