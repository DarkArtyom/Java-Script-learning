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

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На каждой итерации будем проверять совпадает ли элемент массива с
//   // именем клиента. Если совпадает то мы записываем в message сообщение
//   // об успехе и делаем break чтобы не искать дальше
//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }
//   message = "Клиента с таким именем нету в базе данных!";
// }

// console.log(message);

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

/*
Умова завдання:
Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення змінної hours.
Якщо значення змінної hours:
- менше 17, виводь рядок "Pending"
- більше або рівне 17 і менше або дорівнює 24, виводь рядок "Expires"
- більше 24, виводи рядок "Overdue"
*/

// exaple #6
// const hours = 25;
// let message;

// if (hours < 17) {
//   message = "Pending";
// } else if (hours >= 17 && hours <= 24) {
//   message = "Expires";
// } else {
//   hours > 24;
//   message = "Overdue";
// }
// console.log(message);

// example 9
// Напиши цикл for який виводить у консоль браузера числа за зростанням від min до max, але якщо число кратне 5.
// */

// const max = 100;
// const min = 20;

// for (i = min; i <= max; i += 5) {
//   console.log(i);
// }

// example 10
// Умова завдання:
// Напиши скрипт, який буде запитувати логін за допомогою prompt і логуватиме результат у консоль браузера.
// - Якщо відвідувач вводить "Адмін", то prompt запитує пароль
// - Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок "Скасовано"
// - В іншому випадку вивести рядок "Я вас не знаю"
// Пароль перевіряти так:
// - Якщо введено пароль "Я адмін", то вивести рядок "Вітаю!"
// - Інакше виводити рядок "Невірний пароль"
// */

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"]; -----????
// console.log(clients.slice(1, 3));

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   // Change code above this line
// }

// Task 12
// console.log(calculateEngravingPrice);
// const words = "java script is js";
// let array = words.split(" ");
// // console.log(array);
// let total = array.length * 2;
// console.log(total);

// Task 13
// let title = "Ten secrets of JavaScript";
// title = title.toLocaleLowerCase();
// let slug = title.split(" ");
// console.log(slug.join("-"));

// task 16
// const firstArray = ["Mango", "Poly"];
// const secondArray = ["Ajax", "Chelsea"];

// let newArray = firstArray.concat(secondArray);
// // console.log(newArray);
// let maxLength = 3;

// if (newArray.length > maxLength) {
//   console.log(newArray.slice(0, maxLength));
// } else {
//   console.log(newArray);
// }

// task 18
// function calculateTotal(number) {
//   total = 0;
//   for (i = 0; i <= number; i += 1) {
//     total += i;
//   }
//   return total;
// }

// task 21
// variant #1
// let words = "The quick brown fox jumped over the lazy dog";
// let wordsNew = words.split(" ");
// console.log(wordsNew);
// let longestWord = 0;
// for (i = 0; i <= wordsNew.length; i += 1) {
//   if (wordsNew[i].length > longestWord) {
//     longestWord = wordsNew[i].length;
//   }
//   console.log(longestWord); ---- back only number of word.length

// variant#2
// function findLongestWord(string) {
//   string = string.split(" ");
//   let longestWord = string[0];
//   for (const word of string) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// task 22
// let min = 14;
// let max = 17;
// const numbers = [];

// let arrNumbers = 0;
// for (i = min; i <= max; i += 1) {
//   arrNumbers = i;
//   console.log(arrNumbers);
//   // numbers.push(arrNumbers);
//
// Вызов функции createArrayOfNumbers(14, 17) возвращает [14, 15, 16, 17]

// task 23
// const numbers = [1, 2, 3, 4, 5];
// let value = 4;
// let arr = [];

// console.log(numbers);

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
//   if (numbers[i] > value) {
//     arr.push(numbers[i]);
//   }
//   console.log(arr);

// task 24
// const fruit = "pear";
// const fruits = ["apple", "plum", "pear", "orange"];
// if (fruits.includes(fruit)) {
//   console.log(fruit);
// }

// task 25

let array1 = [1, 2, 3];
let array2 = [2, 1, 17, 19];
let newArr = [];
console.log(array1);
console.log(array2);

for (let i = 0; i < array1.length; i += 1) {
  console.log(array1[i]);
  if (array2.includes(array1[i])) {
    newArr.push(array1[i]);
  }
  console.log(newArr);
}

// for (let i = 0; i < array2; i += 1) {
//   console.log("array", array2[i]);
//   if (array1.includes(array2.length)) {
//     newArr.push(array2);
//   }
//   console.log(newArr);
// }

// Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает[1, 2]

// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.
