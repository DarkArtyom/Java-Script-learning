function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
  const totalPrice = pricePerDroid * orderedQuantity;
  if (customerCredits < totalPrice) {
    message = "Insufficient funds!";
  } else {
    customerCredits -= totalPrice;
    message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
  }

  // Change code above this line
  return message;
}
console.log(makeTransaction(500, 10, 5000));

// task 33

function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  if (message.length <= maxLength) {
    result = message;
  } else {
    result = message.slice(0, maxLength) + "...";
  }
  /// Change code above this line
  return result;
}

// task 36 part 1

function checkForSpam(message) {
  let result;
  // Change code below this line
  message = message.toLowerCase();
  if (message.includes("spam")) {
    result = true;
  } else if (message.includes("sale")) {
    result = true;
  } else {
    result = false;
  }
  // Change code above this line
  return result;
}
