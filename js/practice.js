"use strict";
// operator if and else

let cost;
const subscribtion = "premium";

if (subscribtion === "free") {
  cost = 0;
} else if (subscribtion === "vip") {
  cost = 100;
} else if (subscribtion === "premium") {
  cost = 1000;
} else {
  console.log("Invalid subscription type");
}

console.log(cost);

// ternal operator

const balance = 1000;
const message = balance <= 0 ? "positive" : "negative";
console.log(message);

const age = 18;
const info = age <= 19 ? "welcome to pornhub" : "have to grow";
console.log(info);

let price;
const game = "cs";

// switch instruction

switch (game) {
  case "dota":
    price = 100;
    break;

  case "cs":
    price = 1800;
    break;

  default:
    console.log("invalid have no money");
}

// loop with while----

console.log(price);

let clientCounter = 18;
const maxClients = 25;

while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}
