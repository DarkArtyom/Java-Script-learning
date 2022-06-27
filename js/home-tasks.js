// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (customerCredits < totalPrice) {
//     message = "Insufficient funds!";
//   } else {
//     customerCredits -= totalPrice;
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
//   }

//   // Change code above this line
//   return message;
// }
// console.log(makeTransaction(500, 10, 5000));

// // task 33

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     result = message.slice(0, maxLength) + "...";
//   }
//   /// Change code above this line
//   return result;
// }

// // task 36 part 1

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   message = message.toLowerCase();
//   if (message.includes("spam")) {
//     result = true;
//   } else if (message.includes("sale")) {
//     result = true;
//   } else {
//     result = false;
//   }
//   // Change code above this line
//   return result;
// }

// Напишите 2 цикла:
// - цикл, который выводит в консоль числа от max до min по убыванию
// - цикл, который выводит в консоль все четные числа от min до max
// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i -= 1) {
//   console.log(i);
// }
// for (let i = min; i <= max; i += 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// При завантажені сторінки користувачу пропонується в prompt ввести число.
// Дані добавляются до значення змінної total.
// Операція вводу числа продовжується до того часу, поки юзер не нажме Cancel в prompt.
// Після чого потрібно показати alert з повідомленням "Загальна сума введених чисел дорівнює [число]

// let total = 0;

// do {
//   const enterNumber = prompt("Введіть число");
//   total += enterNumber;
//   console.log(enterNumber === null);
// } while (enterNumber !== null);

// Замовлення турів:
// Пишемо реєстрацію користувача за допомогою prompt.  Окремо логін та пароль. Валідацію не потрібно робити.
// Аналогічно пишемо логінізацію: запитуємо логін та пароль, порівнюємо їх з даними, які були введені при авторизації. Якщо все вірно - виводимо в консоль, що логін успішний. Якщо ні - знову запитуємо логін та пароль.
// Запитуємо максимальну суму, яку готовий витратити користувач на тур.
// Виводимо список усіх країн в alert, які доступні по сумі для користувача.
// Вказуємо країну через prompt  і купляємо тур.
// Виводимо повідомлення, що тур оплачений і залишок на рахунку користувача.

// const countries = [
//   "Ukraine",
//   "Poland",
//   "Croatia",
//   "Montenegro",
//   "France",
//   "USA",
// ];

// const countriesPrice = [100, 200, 300, 400, 500, 600];

// let userName;
// let userPass;
// let userCredits;
// let userCountry;
// let maxPrice;

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message;

for (const client of clients) {
  // На каждой итерации будем проверять совпадает ли элемент массива с
  // именем клиента. Если совпадает то мы записываем в message сообщение
  // об успехе и делаем break чтобы не искать дальше
  if (client === clientNameToFind) {
    message = "Клиент с таким именем есть в базе данных!";
    break;
  }
  message = "Клиента с таким именем нету в базе данных!";
}

console.log(message);
